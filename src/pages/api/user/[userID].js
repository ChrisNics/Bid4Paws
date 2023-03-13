import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/userModel';
import Address from '@/models/addressModel';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await dbConnect();

      const user = await User.findById(req.query.userID).populate('address');
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
      const { address, password, ...userUpdates } = req.body;

      if (password) {
        return res.status(404).json({ message: 'This api is not for changing password' });
      }

      const updatedUser = await User.findByIdAndUpdate(userID, userUpdates, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      if (address) {
        const updatedAddress = await Address.findByIdAndUpdate(updatedUser.address, address, {
          new: true
        });
        updatedUser.address = updatedAddress._id;
      }

      return res
        .status(200)
        .json({ success: true, message: 'User updated successfully', data: updatedUser });
    } catch (error) {
      mongoDBErrorHandler(res, error);
    }
  }
}
