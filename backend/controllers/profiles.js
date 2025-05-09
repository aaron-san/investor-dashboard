const Profile = require("../models/Profile");

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find({});
    // const count = await Profile.countDocuments();
    // console.log(count);
    res.json(profiles.slice(0, 10));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOneProfile = async (req, res) => {
  try {
    const query = req.params.ticker;
    const profile = await Profile.find({
      ticker: new RegExp("^" + query, "i"),
    });
    // if (profile.length === 0) {
    //   return res.status(404).json({ message: "Could not find profile" });
    // }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const debug = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json({ count: profiles.length, first: profiles[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllProfiles, getOneProfile, debug };
