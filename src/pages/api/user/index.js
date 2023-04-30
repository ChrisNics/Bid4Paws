import dbConnect from '../../../../lib/dbConnect';
import User from '@/models/userModel';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';
import APIQueryBuilder from '../../../../lib/APIQueryBuilder';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    try {
      const queryBuilder = new APIQueryBuilder(User.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const users = await queryBuilder.query;

      if (users.length === 0) {
        return res.status(200).json({ data: [] });
      }

      return res.status(200).json({ data: users });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }

  if (req.method === 'DELETE') {
    try {
      const deleteCount = await User.deleteMany({});

      if (deleteCount === 0) {
        return res.status(204).end();
      }

      return res.status(200).json({ message: `Deleted ${deleteCount} users` });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
