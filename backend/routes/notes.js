const express = require("express");

const router = express.Router();
const Note = require("../models/note");

// Get all
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get one
router.get("/:id", getNote, (req, res) => {
  res.send(res.note);
});
// Creating one
router.post("/", async (req, res) => {
  const note = new Note({
    company: req.body.company,
    asset: req.body.asset,
    content: req.body.content,
  });
  try {
    const newNote = await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Updating one
router.patch("/:id", getNote, async (req, res) => {
  if (req.body.company !== null) {
    res.note.company = req.body.company;
  }
  if (req.body.asset !== null) {
    res.note.asset = req.body.asset;
  }
  if (req.body.content !== null) {
    res.note.content = req.body.content;
  }

  try {
    const updatedNote = await res.note.save();
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete("/:id", getNote, async (req, res) => {
  try {
    await res.note.deleteOne();
    res.json({ message: "Deleted note" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getNote(req, res, next) {
  let note;
  try {
    note = await Note.findById(req.params.id);
    if (note === null) {
      return res.status(404).json({ message: "Could not find note" }); // could not find resources
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.note = note; // make res.note accessible to callback
  next();
}

module.exports = router;
