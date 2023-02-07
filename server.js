const fs = require('fs');
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// 
const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => { 
    console.log('here');
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/notes', (req, res) => {
    console.log('here');
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        res.json(JSON.parse(data))
    });
});

app.post('/api/notes', (req, res) => {
    const {title, text} = req.body
    const newNote = {
        title,
        text,
        id:uuidv4()
    }
    fs.readFile('./db/db.json', (err, data) => {
    let array = JSON.parse(data)
    array.push(newNote)
    fs.writeFile('./db/db.json', JSON.stringify(array, null, 2), (err) => {
        if (err) {
            throw err
        } else {
            res.json()
            console.log('Note saved!')
        }
    });
});

});

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
});
