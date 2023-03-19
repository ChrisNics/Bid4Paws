import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/userModel';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

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
      mongoDBErrorHandler(res, error);
    }
  } else {
    res.status(405).json({
      message: 'Method not allowed'
    });
  }
}
