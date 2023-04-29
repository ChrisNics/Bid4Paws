import Pusher from 'pusher';
import Match from '@/models/matchModel';
import Dog from '@/models/dogModel';
import User from '@/models/userModel'; // Import the User model
import dbConnect from '../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';

// Create a new Pusher instance
const pusher = new Pusher({
  appId: '1561536',
  key: 'effba3036d4404fa793d',
  secret: '3faf0b5327359df46a3a',
  cluster: 'ap1',
  useTLS: true
});

// ... other functions (getMatchedDogIds, triggerPusherEvent, findNearbyDogs) remain the same

const getCurrentDogId = async (userID) => {
  const user = await User.findOne({ _id: userID });
  const currentDog = user?.dogs.find((dog) => dog.isCurrent);
  return currentDog ?? user.dogs[user.dogs.length - 1];
};

const getMatchedDogIds = async (dogID) => {
  // Find the matches where the current dog has either sent or received a match request
  const matchedDogs = await Match.find({
    $or: [{ 'from.dog': dogID }, { 'to.dog': dogID }]
  });

  // Extract the IDs of the dogs that the current dog has already matched with
  const matchedDogIds = matchedDogs.flatMap((match) => {
    const dogIds = [];
    if (match.from.dog !== dogID) {
      dogIds.push(match.from.dog);
    }
    if (match.to.dog !== dogID) {
      dogIds.push(match.to.dog);
    }
    return dogIds;
  });

  return matchedDogIds;
};

const triggerPusherEvent = async (req, matchedDogIds) => {
  const { userID } = req.query;
  const { _id, gender } = await getCurrentDogId(userID);
  const { nearbyDogs } = await findNearbyDogs(req, matchedDogIds, gender);
  pusher.trigger('match', `dog-nearby-${_id}`, { nearbyDogs: nearbyDogs.length });
};

const findNearbyDogs = async (req, matchedDogIds, gender) => {
  const { lng, lat, radius, userID } = req.query;

  const matchQuery = {
    $and: [
      {
        gender: { $ne: gender } // Opposite gender
      },
      {
        'address.geocoding.coordinates': {
          $geoWithin: {
            $centerSphere: [[parseFloat(lng), parseFloat(lat)], parseFloat(radius) / 6371]
          }
        }
      },
      { _id: { $nin: matchedDogIds } },
      { owner: { $ne: userID } }
    ]
  };

  const nearbyDogs = await Dog.find(matchQuery);

  let randomDog;
  if (nearbyDogs.length > 0) {
    // Randomly select a dog from the array of nearby dogs
    const randomIndex = Math.floor(Math.random() * nearbyDogs.length);
    randomDog = nearbyDogs[randomIndex];
  }

  return { nearbyDogs, randomDog: randomDog || null };
};

const handler = async (req, res) => {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const { userID } = req.query;

      if (!userID) {
        return res.status(400).json({ success: false, error: 'Missing required parameters.' });
      }

      const { _id, gender } = await getCurrentDogId(userID);
      const matchedDogIds = await getMatchedDogIds(_id);

      const { randomDog, nearbyDogs } = await findNearbyDogs(req, matchedDogIds, gender);
      pusher.trigger('match', `dog-nearby-${_id}`, { nearbyDogs: nearbyDogs.length });

      // Watch for changes in the Match collection and trigger a Pusher event if new nearby dogs are found
      const matchStream = Match.watch();
      matchStream.on('change', async () => {
        const matchedDogIds = await getMatchedDogIds(_id);
        await triggerPusherEvent(req, matchedDogIds);
      });

      res.status(200).json({ success: true, data: { randomDog } });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
};

export default handler;
