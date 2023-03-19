import dbConnect from '@/utils/dbConnect';
import User from '@/models/userModel';

export default async function handler(req, res) {
  try {
    await dbConnect();

    const { lng, lat, radius } = req.query;

    if (!lng || !lat || !radius) {
      return res.status(400).json({ success: false, error: 'Missing required parameters.' });
    }

    const users = await User.find({
      location: {
        $geoWithin: {
          $centerSphere: [[parseFloat(lng), parseFloat(lat)], parseFloat(radius) / 6371] // radius in km
        }
      }
    });

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error.' });
  }
}
