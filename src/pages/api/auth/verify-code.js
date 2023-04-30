import User from '@/models/userModel';
import dbConnect from '../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    const { email, verificationCode } = req.body;

    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      // Check if verification code is correct
      if (user.verificationCode !== verificationCode) {
        return res.status(400).json({ message: 'Invalid verification code' });
      }

      // Verify user
      user.isVerified = true;
      user.verificationCode = null;
      await user.save();

      res.json({ message: 'User verified successfully' });
    } catch (error) {
      mongoDBErrorHandler(res, error);
    }
  }
}
