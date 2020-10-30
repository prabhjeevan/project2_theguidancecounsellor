const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    programName: {type: String},
    content: String,
    safety: {type: Number, min: 1, max: 5, default: 5},
    studentSatisfaction: {type: Number, min: 1, max: 5, default: 5},
    overallRating: {type: Number, min: 1, max: 5, default: 5},
    year: {type: Number, min: 2010, max: 2025, default:2020}
  }, {
    timestamps: true
  });
  

const schoolSchema = new Schema({
  name: {type: String, required: true, unique: true},
  city: {type: String, required: true},
  reviews: [reviewSchema],
  googleId: String
}, {
  timestamps: true
}); 

module.exports = mongoose.model('School', schoolSchema);
