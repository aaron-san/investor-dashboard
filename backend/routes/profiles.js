const express = require("express");

const router = express.Router();
const { Profile } = require("../models/index");
const {
  getAllProfiles,
  getOneProfile,
  debug,
} = require("../controllers/profiles");

// Get all
router.get("/", getAllProfiles);

// Get one
router.get("/:ticker", getOneProfile);

// Get count and first one
router.get("/debug", debug);

// Get one
router.get("/:id", getProfile, (req, res) => {
  res.send(res.profile);
});

// Creating one
// router.post("/", async (req, res) => {
//   const note = new Note({
//     company: req.body.company,
//     asset: req.body.asset,
//     content: req.body.content,
//   });
//   try {
//     const newNote = await note.save();
//     res.status(201).json(note);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Updating one
// router.patch("/:id", getNote, async (req, res) => {
//   if (req.body.company !== null) {
//     res.note.company = req.body.company;
//   }
//   if (req.body.asset !== null) {
//     res.note.asset = req.body.asset;
//   }
//   if (req.body.content !== null) {
//     res.note.content = req.body.content;
//   }

//   try {
//     const updatedNote = await res.note.save();
//     res.json(updatedNote);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Deleting one
// router.delete("/:id", getNote, async (req, res) => {
//   try {
//     await res.note.deleteOne();
//     res.json({ message: "Deleted note" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Middleware - Get one
async function getProfile(req, res, next) {
  let profile;
  try {
    profile = await Profile.findById(req.params.id);
    if (profile === null) {
      return res.status(404).json({ message: "Could not find profile" }); // could not find resources
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.profile = profile; // make res.note accessible to callback
  next();
}

module.exports = router;
