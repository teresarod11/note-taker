const fs = require('fs');
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// 
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.get('/', (req, res) => { 
//     console.log('here');
//     res.sendFile(path.join(__dirname, './public/index.html'))
// });

app.get('/notes', (req, res) => {
    console.log('here');
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

// app.get('/api/notes', (req, res) => {
//     fs.readFile('./db/db.json')
// });

// app.post('/api/notes', (req, res) => {
//     res.readFile('./db/db.json')
// });

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
});
