// models/BattlePass.js

import mongoose from 'mongoose';

const BattlePassSchema = new mongoose.Schema({
  _id: { type: String },
  image: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: Number, required: true },
  icon: { type: String },
  recompense1: { type: String },
  recompense2: { type: String },
  recompense3: { type: String },
  recompense4: { type: String },
  Defis_img1: { type: String },
  Defis_img2: { type: String },
  Defis_text1: { type: String },
  Defis_text2: { type: String },
});

export default mongoose.models.BattlePass || mongoose.model('BattlePass', BattlePassSchema);
