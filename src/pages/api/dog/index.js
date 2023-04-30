import dbConnect from '../../../../lib/dbConnect';
import Dog from '@/models/dogModel';
import mongoDBErrorHandler from '../../../../lib/mongoDBErrorHandler';
import APIQueryBuilder from '../../../../lib/APIQueryBuilder';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'GET') {
    try {
      const queryBuilder = new APIQueryBuilder(Dog.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const dogs = await queryBuilder.query;

      if (dogs.length === 0) {
        return res.status(204).end();
      }

      return res.status(200).json({ data: dogs });
    } catch (error) {
      console.log(error);
      mongoDBErrorHandler(res, error);
    }
  }
}
