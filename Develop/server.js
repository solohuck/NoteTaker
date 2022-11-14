const express = require('express'); 

const app = express();
const PORT = 3001;
const path = require('path');
const termData = require('./db/db.json')

// 

app.use(express.static('public'));

// HTML routes 

app.get( '/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// API routes 

app.get('/api/notes', (req, res) => res.json(termData));

// POST request to add a review 

app.post('/api/notes', (req, res) => {

// log that a POST request was recived 

    consonle.log(`${req.method} request recived to add a review`);
})