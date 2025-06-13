const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  skillsOffered: [String],
  skillsWanted:  [String],
  rating: { type: Number, default: 0 },
  reviews: [
    {
      reviewer: String,
      comment: String,
      rating: Number,
      date: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);