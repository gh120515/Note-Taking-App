// dependencies
const router = require('express').Router();
// const uuid = require('../helpers/uuid.js');

// helper functions 
// const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');

// Route to handle fetching of all notes (in JSON)

module.exports = (app) => {



//     router.get('/api.notes', (req, res) => {
//         readFromFile('notes.json', 'utf8', (err, data) => {
//             if (err) {
//                 console.error(err);
//                 return res.status(500).json({ error: 'Failed to read notes.'});
//             } 
//             try {
//                 const notes = JSON.parse(data);
//                 res.json(notes);
//             } catch(error) {
//                 console.error(error);
//                 res.status(500).json({ error: 'Failed to parse notes.' });
//             }
    
//         });
//     });
    
//     // Route to handle creating a new note
//     app.post('/api/notes', (req, res) => {
//         const { title, content } = req.body;
      
//         fs.readFile('notes.json', 'utf8', (err, data) => {
//           if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Failed to read notes.' });
//           }
      
//           try {
//             const notes = JSON.parse(data);
//             const newNote = { id: Date.now(), title, content };
//             notes.push(newNote);
      
//             fs.writeFile('notes.json', JSON.stringify(notes), (err) => {
//               if (err) {
//                 console.error(err);
//                 return res.status(500).json({ error: 'Failed to write note.' });
//               }
      
//               res.json(newNote);
//             });
//           } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Failed to parse notes.' });
//           }
//         });
//       });
      
}
