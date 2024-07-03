// pages/api/pass/[passId].js

import { ObjectId } from 'mongodb';
import { connectMongoDB  } from '@/lib/mongodb';

export default async function handler(req, res) {
  const { passId } = req.query;

  if (!passId || typeof passId !== 'string') {
    res.status(400).json({ error: 'Invalid passId' });
    return;
  }

  try {
    const { db } = await connectMongoDB ();
    const passDetails = await db.collection('detailsPasses').findOne({ _id: new ObjectId(passId) });

    if (!passDetails) {
      res.status(404).json({ error: 'Pass not found' });
      return;
    }

    res.status(200).json(passDetails);
  } catch (error) {
    console.error('Failed to fetch pass details:', error);
    res.status(500).json({ error: 'Failed to fetch pass details' });
  }
}
