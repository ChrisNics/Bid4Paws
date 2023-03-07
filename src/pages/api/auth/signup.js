import dbConnect from '../../../../lib/dbConnect';
import Address from '@/models/addressModel';
import User from '@/models/userModel';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      const { address } = req.body;

      delete req.body.address; // Delete the address since we are having the new value as ObjectID see line 17
      const newUser = await User.create(req.body);

      // If an address is provided, create a new address and associate it with the user
      if (address) {
        const newAddress = await Address.create(address);
        newUser.address = newAddress._id;
        newAddress.user = newUser._id;
        await newUser.save();
        await newAddress.save();
      }

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
      mongoDBErrorHandler(res, error);
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed'
    });
  }
}
