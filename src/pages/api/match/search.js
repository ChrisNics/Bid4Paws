import dbConnect from '../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';
import Dog from '@/models/dogModel';
import Match from '@/models/matchModel';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    try {
      const { lng, lat, radius, dogID, userID } = req.query;

      if ((!lng, !lat || !radius || !dogID || !userID)) {
        return res.status(400).json({ success: false, error: 'Missing required parameters.' });
      }

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

      const randomDogs = await Dog.find(matchQuery).limit(10);

      res.status(200).json({ success: true, data: { randomDogs } });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
