import dbConnect from '../../../../../../lib/dbConnect';
import Dog from '@/models/dogModel';
import mongoDBErrorHandler from '../../../../../../lib/mongoDBErrorHandler';
import User from '@/models/userModel';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'PATCH') {
    try {
      const { userID, dogID } = req.query;

      const updateQuery = req.body;

      // Check if the update query includes the 'certificate' property
      const includesCertificateProp = 'certificate' in updateQuery;

      if (includesCertificateProp) {
        // If the update query includes the 'certificate' property, set isApproved.status to 'Pending' and isApproved.comment to null
        updateQuery.isApproved = { status: 'Pending', comment: null };
      }

      if ('isCurrent' in updateQuery) {
        // If 'isCurrent' is present in the update query, set it to true and set all other dogs to false
        updateQuery.isCurrent = true;
        await Dog.updateMany(
          { owner: userID, _id: { $ne: dogID } },
          { $set: { isCurrent: false } }
        );
      }

      // Update the dog with the given userID and dogID with the remaining fields in the update query
      const updatedDog = await Dog.findOneAndUpdate({ owner: userID, _id: dogID }, updateQuery, {
        new: true
      });

      if (!updatedDog) {
        // If the dog is not found, return a 404 error
        return res
          .status(404)
          .json({ message: 'Dog not found for the given user ID and dog ID', status: 404 });
      }

      // Return a success response with the updated dog data
      res.status(200).json({ message: 'Dog updated successfully', status: 200, data: updatedDog });
    } catch (error) {
      console.log(error);
      // If there's an error, handle it with the mongoDBErrorHandler function
      mongoDBErrorHandler(res, error);
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { userID, dogID } = req.query;

      // Find and delete the dog with the given userID and dogID
      const deletedDog = await Dog.findOneAndDelete({ owner: userID, _id: dogID });
      if (!deletedDog) {
        // If the dog is not found, return a 404 error
        return res.status(404).json({
          message: 'Dog not found for the given user ID and dog ID',
          status: 404
        });
      }

      // Get the ID of the deleted dog and remove it from the user's 'dogs' array
      const deletedDogID = deletedDog._id;
      await User.findOneAndUpdate({ _id: userID }, { $pull: { dogs: deletedDogID } });

      // Return a success response with the deleted dog data
      res.status(200).json({
        message: 'Dog deleted successfully',
        status: 200,
        data: deletedDog
      });
    } catch (error) {
      console.log(error);
      // If there's an error, handle it with the mongoDBErrorHandler function
      mongoDBErrorHandler(res, error);
    }
  }
}
