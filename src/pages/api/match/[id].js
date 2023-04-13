import dbConnect from '../../../../lib/dbConnect';
import Match from '@/models/matchModel';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';

export default async function handler(req, res) {
  if (req.method === 'PATCH') {
    try {
      await dbConnect();
      const updatedMatch = await Match.findByIdAndUpdate(req.query.id, req.body, { new: true });

      if (!updatedMatch) {
        return res.status(404).json({ message: 'Match not found for the given id', status: 404 });
      }

      return res
        .status(200)
        .json({ message: 'Match updated successfully', status: 200, data: updatedMatch });
    } catch (error) {
      console.error(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
