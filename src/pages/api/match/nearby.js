// Import Pusher library and database models
import Pusher from 'pusher';
import Match from '@/models/matchModel';
import Dog from '@/models/dogModel';
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

// Function to find nearby dogs
const findNearbyDogs = async (req, res, matchedDogIds) => {
  // Get required parameters from request query
  const { lng, lat, radius, dogID, userID } = req.query;

  // Return error if any required parameter is missing
  if (!lng || !lat || !radius || !dogID || !userID) {
    return res.status(400).json({ success: false, error: 'Missing required parameters.' });
  }

  // Create a query object for finding nearby dogs
  const matchQueryObj = {
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

  // Count the number of nearby dogs that match the query
  const nearbyDogs = await Dog.countDocuments(matchQueryObj);

  // Return the count of nearby dogs
  return { success: true, nearbyDogs };
};

// Function to get matched dog IDs for a given dog
const getMatchedDogIds = (matchedDogs, dogID) => {
  // Map the matched dogs to their dog IDs
  return matchedDogs.flatMap(({ from, to }) => {
    const dogIds = [];
    if (from.dog !== dogID) {
      dogIds.push(from.dog);
    }
    if (to.dog !== dogID) {
      dogIds.push(to.dog);
    }
    return dogIds;
  });
};

// Function to get matched dogs and their IDs for a given dog
const getMatchedDogsAndIds = async (dogID) => {
  // Find all matches involving the given dog
  const matchedDogs = await Match.find({ $or: [{ 'from.dog': dogID }, { 'to.dog': dogID }] });

  // Get the dog IDs of the matched dogs
  const matchedDogIds = getMatchedDogIds(matchedDogs, dogID);

  // Return both the matched dogs and their IDs
  return { matchedDogs, matchedDogIds };
};

// Main function to handle the request and response
const handler = async (req, res) => {
  try {
    // Connect to database
    await dbConnect();

    // Get required parameters from request query
    const { lng, lat, radius, dogID } = req.query;

    // Return error if any required parameter is missing
    if (!lng || !lat || !radius || !dogID) {
      return res.status(400).json({ success: false, error: 'Missing required parameters.' });
    }

    // Get the matched dogs and their IDs for the given dog
    const { matchedDogs, matchedDogIds } = await getMatchedDogsAndIds(dogID);

    // Find nearby dogs that match the given criteria
    const nearbyDogsResponse = await findNearbyDogs(req, res, matchedDogIds);

    // Trigger a Pusher event with the count of nearby dogs
    if (nearbyDogsResponse.success) {
      pusher.trigger('match', 'nearby', { nearbyDogs: nearbyDogsResponse.nearbyDogs });
    }

    // Watch for changes in the Match collection and trigger a Pusher event if new nearby dogs are found
    const matchStream = Match.watch();
    matchStream.on('change', async () => {
      const { matchedDogs, matchedDogIds } = await getMatchedDogsAndIds(dogID);
      const nearbyDogsResponse = await findNearbyDogs(req, res, matchedDogIds);
      if (nearbyDogsResponse.success) {
        pusher.trigger('match', 'nearby', { nearbyDogs: nearbyDogsResponse.nearbyDogs });
        console.log({ nearbyDogsResponse });
      }
    });

    // Send a success response
    res.status(200).json({ success: true, message: 'Sent event successfully' });
  } catch (error) {
    mongoDBErrorHandler(res, error);
  }
};

// Export the main function as the default export
export default handler;
