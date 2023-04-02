import dbConnect from '../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';
import Dog from '@/models/dogModel';
import User from '@/models/userModel';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    try {
      const { lng, lat, radius, userID, dogID } = req.query;

      if (!lng || !lat || !radius || !userID) {
        return res.status(400).json({ success: false, error: 'Missing required parameters.' });
      }

      const dogs = await Dog.find({
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
      });

      res.status(200).json({ success: true, data: dogs });
    } catch (error) {
      mongoDBErrorHandler(res, error);
    }
  }
}
