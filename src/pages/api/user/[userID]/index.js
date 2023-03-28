import dbConnect from '../../../../../lib/dbConnect';
import User from '@/models/userModel';
import mongoDBErrorHandler from '../../../../../lib/mongoDBErrorHandler';
import Dog from '@/models/dogModel';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    try {
      const user = await User.findById(req.query.userID);
      if (!user) {
        return res.status(404).json({ message: 'User not found', status: 404 });
      }

      return res
        .status(200)
        .json({ message: 'User retrieved successfully', status: 200, data: user });
    } catch (error) {
      mongoDBErrorHandler(res, error);
    }
  }

  if (req.method === 'PATCH') {
    try {
      const { userID } = req.query;
      const { password, ...userUpdates } = req.body;

      if (password) {
        return res
          .status(400)
          .json({ message: 'This API is not for changing password', status: 400 });
      }

      const updatedUser = await User.findByIdAndUpdate(userID, userUpdates, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found', status: 404 });
      }

      if (userUpdates.address) {
        console.log('test');
        // Update the corresponding dogs' addresses
        await Dog.updateMany({ owner: userID }, { address: updatedUser.address });
      }

      return res
        .status(200)
        .json({ message: 'User updated successfully', status: 200, data: updatedUser });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
