require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Question = require('./models/Question');
const app = express();

const MONGO_URI = 'mongodb+srv://harnoorkaur16165:harnoorkaur1615@cluster0.f8jrbpk.mongodb.net/gate-scraper';
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use(express.json());

// Get all questions
app.get('/questions', async (req, res) => {
  try {
    const { topic, year, subject } = req.query;
    let filter = {};
    
    if (topic) filter.topic = topic;
    if (year) filter.year = parseInt(year);
    if (subject) filter.subject = subject;
    
    const questions = await Question.find(filter);
    res.json({ count: questions.length, questions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all topics
app.get('/topics', async (req, res) => {
  try {
    const topics = await Question.distinct('topic');
    res.json({ topics });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a question
app.post('/questions', async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ message: 'Question added', question });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get question by ID
app.get('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findOne({ question_id: req.params.id });
    if (!question) return res.status(404).json({ error: 'Question not found' });
    res.json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Get statistics
app.get('/stats', async (req, res) => {
  try {
    const totalQuestions = await Question.countDocuments();
    const byYear = await Question.aggregate([
      { $group: { _id: '$year', count: { $sum: 1 } } },
      { $sort: { _id: -1 } }
    ]);
    const byTopic = await Question.aggregate([
      { $group: { _id: '$topic', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    const bySubject = await Question.aggregate([
      { $group: { _id: '$subject', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    
    res.json({
      total: totalQuestions,
      byYear,
      byTopic,
      bySubject
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});