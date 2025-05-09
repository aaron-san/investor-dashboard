const express = require("express");

const router = express.Router();
// const Note = require("../models/note");
const {
  getAllNotes,
  createOneNote,
  updateOneNote,
  deleteOneNote,
} = require("../controllers/notes");

// Get all
router.get("/", getAllNotes);

// Get one
router.get("/:id", getNote, (req, res) => {
  res.send(res.note);
});
// Creating one
router.post("/", createOneNote);

// Updating one
router.patch("/:id", getNote, updateOneNote);

// Deleting one
router.delete("/:id", getNote, deleteOneNote);

// Middleware - Get one
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
