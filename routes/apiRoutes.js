const fs = require("fs");
const uuid = require("uuid");
const router = require('express').Router();

router.get('/notes', (req, res) => {
  const note = fs.readFileSync('./db/db.json');
  res.json(JSON.parse(note));
});

router.post('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  const newNote = req.body;
  newNote.id = uuid.v4();
  notes.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  res.json(notes);
});

router.delete('./notes/:id', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json'));
  const deleteNote = notes.filter((removeNote) => removeNote.id !== req.params.id);
  fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));
  res.json(deleteNote);
})

module.exports = router;