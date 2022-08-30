const router = require('express').Router();
const { createNewNote, deleteNote } = require('../notes');
let { notesArray } = require('../../db/db.json');

// api/notes
router.get('/api/notes', (req, res) => {
  let results = notesArray;
  res.json(results);
});

router.post('/api/notes', (req, res) => {

  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});

// Route parameters :
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params
  notesArray = await deleteNote(id, notesArray);
  res.json(notesArray);
});

module.exports = router;