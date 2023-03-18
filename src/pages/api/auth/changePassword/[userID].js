import dbConnect from '../../../../../lib/dbConnect';
import User from '@/models/userModel';
import mongoDBErrorHandler from '../../../../../lib/mongoDBErrorHandler';

export default async function handlePasswordChange(req, res) {
  try {
    await dbConnect();

    if (req.method !== 'PATCH') {
      return res.status(405).json({
        status: 'failed',
        message: 'Method Not Allowed',
        data: null
      });
    }

    const { userID } = req.query;

    const user = await User.findById(userID).select('+password');
    if (!user) {
      return res.status(404).json({
        status: 'failed',
        message: 'User Not Found',
        data: null
      });
    }

    if (!(await user.checkPassword(req.body.passwordCurrent, user.password))) {
      return res.status(401).json({
        message: 'Incorrect password.',
        data: null
      });
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();

    return res.status(200).json({
      message: 'Password Successfully Changed!',
      data: user
    });
  } catch (error) {
    console.log(error);
    mongoDBErrorHandler(res, error);
  }
}
