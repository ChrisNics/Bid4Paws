import User from '@/models/userModel';
import dbConnect from '../../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  try {
    await dbConnect();

    const { lng, lat, radius } = req.query;

    if (!lng || !lat || !radius) {
      return res.status(400).json({ success: false, error: 'Missing required parameters.' });
    }

    const users = await User.find({
      'address.geocoding.coordinates': {
        $geoWithin: {
          $centerSphere: [[parseFloat(lng), parseFloat(lat)], parseFloat(radius) / 6371] // radius in km
        }
      }
    });

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    mongoDBErrorHandler(res, error);
  }
}
