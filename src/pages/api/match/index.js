import dbConnect from '../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';
import APIQueryBuilder from '../../../../lib/APIQueryBuilder';
import User from '@/models/userModel';
import Match from '@/models/matchModel';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    try {
      const { from } = req.body;

      const updatedUser = await User.findByIdAndUpdate(
        from.owner,
        { $inc: { 'plan.swipes': -1 } },
        { new: true }
      );

      const match = await Match.create(req.body);
      if (!match || updatedUser) {
        return res.status(404).json({
          message: 'Failed to create match.',
          status: 404
        });
      }
      res.status(200).json({
        status: 200,
        message: 'Match created successfully.',
        data: match
      });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }

  if (req.method === 'GET') {
    try {
      const { currentDogID, ...query } = req.query;

      const findQuery = currentDogID
        ? { $or: [{ 'from.dog': currentDogID }, { 'to.dog': currentDogID }] }
        : {};

      const queryBuilder = new APIQueryBuilder(Match.find(findQuery), query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

      const matches = await queryBuilder.query;

      if (matches.length === 0) {
        return res.status(200).json({
          status: 200,
          message: 'No matches found.',
          data: []
        });
      }

      return res.status(200).json({
        status: 200,
        message: 'Matches retrieved successfully.',
        data: matches
      });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
