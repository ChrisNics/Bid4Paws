import Verification from '@/models/verificationModel';
import dbConnect from '../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // Check if user exists
      const user = await Verification.findOne({ email });

      if (user) {
        // Delete verification if user already exists
        await Verification.deleteOne({ email });
      }

      const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();

      const newVerification = Verification.create({ email, verificationCode });
      // TODO: Send verification code via email or SMS

      res.status(200).json({
        message: 'Verification code sent successfully',
        code: verificationCode,
        status: 200
      });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
