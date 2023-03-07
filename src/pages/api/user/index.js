import dbConnect from '../../../../lib/dbConnect';
import Address from '@/models/addressModel';
import User from '@/models/userModel';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await dbConnect();

      res.status(200).json({ message: 'Hello from Next.js!' });
    } catch (e) {
      console.log(e);
    }
  }
}
