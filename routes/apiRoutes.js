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
        id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 📝`);
    } else {
      res.error('Error in adding note');
    }
  });

// DELETE route to remove notes
const fs = require('fs');
const db = require('../db/db.json')
api.delete('/api/notes/:id', (req, res) => {
    // filter the JSON file for the note with matching id, then return a new file without this note
    const newNotes = db.filter((note) =>
        note.id !== req.params.id)

    // update the json file then return the updated string to the page
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes))

    res.json(newNotes);
    console.log('Note deleted successfully 🗑️');
})

  
// export module
module.exports = api;
