import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/userModel';
import Verification from '@/models/verificationModel';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      const { email, verificationCode } = req.body;

      // Check if user with email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Check if verification code is correct
      const { verificationCode: storedVerificationCode } = await Verification.findOne({ email });
      if (verificationCode !== storedVerificationCode) {
        return res.status(400).json({ message: 'Invalid verification code' });
      }

      // Delete verification if signup is successful
      await Verification.deleteOne({ email });

      const newUser = await User.create(req.body);

      res.status(201).json({
        message: 'Signup successful',
        data: {
          user: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            address: newUser.address
          }
        }
      });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed'
    });
  }
}
