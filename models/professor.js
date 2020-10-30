const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professorSchema = new Schema({
  name: {type: String, required: true},
  school: String,
  course: String,
  markingDifficulty: String,
  retake:  String,
  requiresParticipation: String,
  googleId: String
}, {
  timestamps: true
}); 

module.exports = mongoose.model('Professor', professorSchema);