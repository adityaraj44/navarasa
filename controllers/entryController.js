const asyncHandler = require("express-async-handler");
const Entry = require("../models/Entry");
const path = require("path");

// @desc    Upload audio file
// @route   POST /uploadfile
// @access  Public

const uploadEntry = asyncHandler(async (req, res) => {
  req.files.audio.mv(
    path.resolve(__dirname, "..", "uploads", req.files.audio.name)
  );

  const {
    submittername,
    role,
    contact,
    country,
    state,
    city,
    postaladdress,
    email,
    artist,
    songtitle,
    artistCategory,
    instagram,
    youtube,
    twitter,
    additionalinfo,
  } = req.body;

  const entry = await Entry.find({
    email: email,
  });
  if (entry) {
    throw new Error("This email is already registered.");
  }

  const newEntry = await Entry.create({
    submittername,
    role,
    contact,
    country,
    state,
    city,
    postaladdress,
    email,
    artist,
    songtitle,
    artistCategory,
    instagram,
    youtube,
    twitter,
    additionalinfo,
    audio,
  });

  res.status(200).json({
    success: true,
    newEntry,
  });
});

module.exports = {
  uploadEntry,
};
