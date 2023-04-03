import dbConnect from '../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';
import Dog from '@/models/dogModel';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    try {
      const { lng, lat, radius, userID } = req.query;

      if (!lng || !lat || !radius) {
        return res.status(400).json({ success: false, error: 'Missing required parameters.' });
      }

      const matchQuery = {
        $and: [
          {
            'address.geocoding.coordinates': {
              $geoWithin: {
                $centerSphere: [[parseFloat(lng), parseFloat(lat)], parseFloat(radius) / 6371] // radius in km
              }
            }
          },
          { owner: { $ne: userID } }
        ]
      };

      const dogCount = await Dog.countDocuments(matchQuery);
      // const randomIndexes = Array.from({ length: 10 }, () => Math.floor(Math.random() * dogCount)); Comment for now since we have limited numbers of dogs
      // const randomDogs = await Dog.find(matchQuery).skip(randomIndexes[0]).limit(10);
      const randomDogs = await Dog.find(matchQuery).limit(10);

      res.status(200).json({ success: true, data: { randomDogs, dogCount } });
    } catch (error) {
      mongoDBErrorHandler(res, error);
    }
  }
}
