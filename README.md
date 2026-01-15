# GATE Question Bank API

RESTful API for organizing and searching GATE (Graduate Aptitude Test in Engineering) previous year questions with topic-wise categorization.

## Live Demo
🔗 **API URL:** https://gate-question-bank-api.onrender.com

## Features
- 97+ previous year questions from GATE 2024
- Topic-wise categorization
- Filter by year, subject, and topic
- Statistics and analytics

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Deployment:** Render

## API Endpoints

### Get All Questions
```
GET /questions
```

### Filter Questions
```
GET /questions?topic=Operating Systems
GET /questions?year=2024
GET /questions?subject=Computer Science
```

### Get Statistics
```
GET /stats
```
Returns total questions and breakdown by year, topic, and subject.

### Get All Topics
```
GET /topics
```

### Get Question by ID
```
GET /questions/:question_id
```

## Installation (Local Development)

1. Clone the repository
```bash
git clone https://github.com/Harnoor9553/gate-question-bank-api.git
cd gate-question-bank-api
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

4. Run the server
```bash
npm start
```

Server will run on `http://localhost:3000`

## Project Structure
```
gate-question-bank-api/
├── models/
│   └── Question.js       # MongoDB schema
├── papers/               # GATE PDF files
├── server.js            # Main application
├── addBatch.js          # Batch upload script
└── README.md
```

## Future Enhancements
- Add more years of GATE questions
- Implement search functionality
- Add difficulty-based filtering
- User authentication for saving favorites
- Practice mode with random questions

## Author
Harnoor Kaur

## License
MIT
