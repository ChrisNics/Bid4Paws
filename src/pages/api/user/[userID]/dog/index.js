import dbConnect from '../../../../../../lib/dbConnect';
import User from '@/models/userModel';
import Dog from '@/models/dogModel';
import mongoDBErrorHandler from '../../../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    const userID = req.query.userID;

    try {
      const user = await User.findById(userID);
      if (!user) {
        return res.status(404).json({ message: 'User not found', status: 404 });
      }

      // Get the user's address
      const address = user.address;

      // Create the dog with the user's address and owner ID
      const dog = await Dog.create({
        ...req.body,
        owner: userID,
        address
      });

      // Add the dog to the user's dogs array
      user.dogs.push(dog._id);
      await user.save();

      // Check if the user only has one dog
      if (user.dogs.length === 1) {
        dog.isCurrent = true;
        await dog.save();
      }

      res.status(200).json({ message: 'Dog created successfully', status: 200, data: dog });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
