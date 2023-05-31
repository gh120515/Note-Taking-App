const api = require('express').Router();

// helper functions 
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET route for retrieving all notes
api.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for a new note
api.post('/api/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      let newNote = {
        title: req.body.title,
        text: req.body.text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 📝`);
    } else {
      res.error('Error in adding note');
    }
  });

// DELETE route to remove notes
api.delete('/api/notes/:id', (req, res) => {
    // grab the note from the JSON file
    const notes = readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    // filter out the single note with matching id
    const newNotes = notes.filter(note => note.id !== parseInt(req.params.id));

    readAndAppend(newNotes, './db/db.json');
    res.json(`Note deleted successfully 🗑️`);
});
  
// export module
module.exports = api;
