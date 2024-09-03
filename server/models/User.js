const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatarNFTId: { type: String },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
  tokens: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', UserSchema);

