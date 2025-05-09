const Note = require("../models/Note");

// Get all
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createOneNote = async (req, res) => {
  const note = new Note({
    company: req.body.company,
    asset: req.body.asset,
    content: req.body.content,
  });
  try {
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateOneNote = async (req, res) => {
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
};

const deleteOneNote = async (req, res) => {
  try {
    await res.note.deleteOne();
    res.json({ message: "Deleted note" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllNotes,
  createOneNote,
  updateOneNote,
  deleteOneNote,
};
