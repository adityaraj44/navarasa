const asyncHandler = require("express-async-handler");
const Entry = require("../models/Entry");
const AWS = require("aws-sdk");

// using s3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

// @desc    Upload entry
// @route   POST /uploadentry
// @access  Public

const uploadEntry = asyncHandler(async (req, res) => {
  // for audio file

  req.files.audio.name = `${Date.now()}-${req.files.audio.name}`;

  // uploading to aws s3
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: req.files.audio.name,
    Body: req.files.audio.data,
  };

  const data = await s3.upload(params).promise();
  if (!data) {
    throw new Error("Error uploading image");
  }

  const audioURI = data.Location;

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

  const newEntry = await Entry.create({
    submittername,
    role,
    contact,
    country,
    state,
    city,
    postaladdress,
    email,
    songtitle,
    audio: audioURI,
    artist,
    artistCategory,
    instagram,
    youtube,
    twitter,
    additionalinfo,
  });

  if (!newEntry) {
    throw new Error("Something went wrong");
  }

  res.status(200).json({
    success: true,
    newEntry,
  });
});

module.exports = {
  uploadEntry,
};
