import dbConnect from '../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';
import APIQueryBuilder from '../../../../lib/APIQueryBuilder';
import Match from '@/models/matchModel';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    try {
      const match = await Match.create(req.body);
      if (!match) {
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
      mongoDBErrorHandler(res, error);
    }
  }

  if (req.method === 'GET') {
    try {
      const queryBuilder = new APIQueryBuilder(Match.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

      const matches = await queryBuilder.query;

      if (matches.length === 0) {
        return res.status(200).json({ status: 200, message: 'No matches found.', data: [] });
      }

      return res
        .status(200)
        .json({ status: 200, message: 'Matches retrieved successfully.', data: matches });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
