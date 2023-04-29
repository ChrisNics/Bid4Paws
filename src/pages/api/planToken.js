import dbConnect from '../../../lib/dbConnect';
import User from '@/models/userModel';
import mongoDBErrorHandler from '../../../lib/mongoDBErrorHandler';
import APIQueryBuilder from '../../../lib/APIQueryBuilder';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    try {
      const { id, planToken, plan } = req.query;

      // Find the user by ID and check if the planToken matches
      const user = await User.findById(id);
      if (!user || user.planToken !== planToken) {
        return res.status(404).json({ error: 'User not found or invalid plan token' });
      }

      // Update the user's plan object
      user.plan.type = plan;
      user.plan.trial = 30;
      await user.save();

      // Send success response
      res.json({ message: 'Plan updated successfully' });
    } catch (error) {
      console.log(error);
      // Send error response
      mongoDBErrorHandler(res, error);
    }
  }
}
