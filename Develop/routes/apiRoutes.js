const api = require('express').Router();

// helper functions 
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET route for retrieving all notes
api.get('/api/notes', (req, res) => {
    readFromFile('./Develop/db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for a new note
api.post('/api/notes', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title: req.body.title,
        text: req.body.text,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './Develop/db/db.json');
      res.json(`Note added successfully 📝`);
    } else {
      res.error('Error in adding note');
    }
  });
  
// export module
module.exports = api;
