import dbConnect from '../../../../../../lib/dbConnect';
import Dog from '@/models/dogModel';
import mongoDBErrorHandler from '../../../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'PATCH') {
    try {
      const { userID, dogID } = req.query;

      const updatedDog = await Dog.findOneAndUpdate({ owner: userID, _id: dogID }, req.body, {
        new: true
      });

      if (!updatedDog) {
        return res
          .status(404)
          .json({ message: 'Dog not found for the given user ID and dog ID', status: 404 });
      }

      res.status(200).json({ message: 'Dog updated successfully', status: 200, data: updatedDog });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
