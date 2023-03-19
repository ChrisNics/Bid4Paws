import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/userModel';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    try {
      const user = await User.findById(req.query.userID);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({ data: user });
    } catch (error) {
      mongoDBErrorHandler(res, error);
    }
  }

  if (req.method === 'PATCH') {
    try {
      const { userID } = req.query;
      const { password, ...userUpdates } = req.body;

      if (password) {
        return res.status(400).json({ message: 'This API is not for changing password' });
      }

      const updatedUser = await User.findByIdAndUpdate(userID, userUpdates, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res
        .status(200)
        .json({ success: true, message: 'User updated successfully', data: updatedUser });
    } catch (error) {
      mongoDBErrorHandler(res, error);
    }
  }
}
