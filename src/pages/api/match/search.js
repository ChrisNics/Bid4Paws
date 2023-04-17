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
  return currentDog?._id ?? user.dogs[user.dogs.length - 1]._id;
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
  const dogID = await getCurrentDogId(userID);
  const { nearbyDogs } = await findNearbyDogs(req, matchedDogIds);
  pusher.trigger('match', `dog-nearby-${dogID}`, { nearbyDogs: nearbyDogs.length });
};

const findNearbyDogs = async (req, matchedDogIds) => {
  const { lng, lat, radius, userID } = req.query;

  const matchQuery = {
    $and: [
      {
        'address.geocoding.coordinates': {
          $geoWithin: {
            $centerSphere: [[parseFloat(lng), parseFloat(lat)], parseFloat(radius) / 6371] // radius in km
          }
        }
      },
      { _id: { $nin: matchedDogIds } }, // Exclude dogs that have already been matched with the current dog
      { owner: { $ne: userID } } // Exclude all dogs of specific user
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

      const dogID = await getCurrentDogId(userID);
      const matchedDogIds = await getMatchedDogIds(dogID);

      const { randomDog, nearbyDogs } = await findNearbyDogs(req, matchedDogIds);
      pusher.trigger('match', `dog-nearby-${dogID}`, { nearbyDogs: nearbyDogs.length });

      // Watch for changes in the Match collection and trigger a Pusher event if new nearby dogs are found
      const matchStream = Match.watch();
      matchStream.on('change', async () => {
        const matchedDogIds = await getMatchedDogIds(dogID);
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
