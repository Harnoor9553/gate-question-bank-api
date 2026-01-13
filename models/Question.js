const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question_id: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  question_text: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    default: []
  },
  correct_answer: {
    type: String
  },
  marks: {
    type: Number,
    default: 1
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);