import dbConnect from '../../../../lib/dbConnect';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';
import Dog from '@/models/dogModel';
import Match from '@/models/matchModel';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    try {
      const match = await Match.create(req.body);
      if (!match) {
        throw new Error('Failed to create match.');
      }
      res.status(200).json({ success: true, data: match });
    } catch (error) {
      mongoDBErrorHandler(res, error);
    }
  }
}
