// pages/api/battlepasses/[id].js

import BattlePass from '@/models/BattlePass';
import { connectMongoDB } from '@/lib/mongodb';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    // Connecter à MongoDB
    await connectMongoDB();

    // Trouver le pass de combat par son ID
    const battlePass = await BattlePass.findById(id);

    if (!battlePass) {
      return res.status(404).json({ error: 'Pass de combat non trouvé' });
    }

    // Retourner les données du pass de combat
    return res.status(200).json(battlePass);
  } catch (error) {
    console.error('Échec de la récupération des détails du pass de combat :', error);
    return res.status(500).json({ error: 'Échec de la récupération des détails du pass de combat' });
  }
}
