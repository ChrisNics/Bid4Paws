import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/userModel';

export default async function handler(req, res) {
  try {
    await dbConnect();
    const user = await User.findById(req.query.userID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}
