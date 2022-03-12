const asyncHandler = require("express-async-handler");
const Entry = require("../models/Entry");
const AWS = require("aws-sdk");
const voucherCodes = require("voucher-code-generator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

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

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const returnedMonth = month < 10 ? `0${month}` : month;
  const returnedDay = day < 10 ? `0${day}` : day;

  const dateSubmitted = `${returnedDay}-${returnedMonth}-${year}`;

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
    dateSubmitted: dateSubmitted,
  });

  if (!newEntry) {
    throw new Error("Something went wrong");
  }

  res.status(200).json({
    success: true,
    newEntry,
  });
});

// @desc    Finalize entry
// @route   PUT /finalizeentry/:id
// @access  Public

const finalizeEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  if (!entry) {
    throw new Error("Entry not found");
  }

  entry.isSubmitted = true;
  let generatedCode = voucherCodes.generate({
    pattern: "####-####-####",
    charset: voucherCodes.charset("numbers"),
    count: 1,
  });
  entry.refId = generatedCode[0];
  await entry.save();

  res.status(200).json({
    success: true,
    entry,
  });
});

// @desc    Get all entries
// @route   POST /admin/entries
// @access  Private

const getAllEntries = asyncHandler(async (req, res) => {
  const entries = await Entry.find({ isSubmitted: true }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    entries,
  });
});

// @desc    Shortlist entry
// @route   PUT /admin/entries/shortlist/:id
// @access  Private

const shortlistEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  if (!entry) {
    throw new Error("Entry not found");
  }
  if (entry.isShortlisted) {
    entry.isShortlisted = false;
    await entry.save();
    return res.status(200).json({
      shortlist: false,
    });
  } else {
    entry.isShortlisted = true;
    await entry.save();
    return res.status(200).json({
      shortlist: true,
    });
  }
});

// @desc    Get entry
// @route   GET /admin/entries/entry/:id
// @access  Private

const getEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  if (!entry) {
    throw new Error("Entry not found");
  }
  res.status(200).json({
    success: true,
    entry,
  });
});

// @desc    Delete entry
// @route   DELETE /admin/entries/entry/delete/:id
// @access  Private

const deleteEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  if (!entry) {
    throw new Error("Entry not found");
  }
  await entry.remove();
  res.status(200).json({
    success: true,
  });
});

// @desc    Admin login
// @route   POST /admin/login
// @access  Private

const adminLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  let token;
  const lowercaseUsername = username.toLowerCase();

  const admin = await User.findOne({ username: lowercaseUsername });

  if (!admin) {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newAdmin = await User.create({
      username: lowercaseUsername,
      password: hashedPassword,
    });
    token = jwt.sign({ id: newAdmin.id }, process.env.JWT_SECRET);
    res.status(200).json({
      success: true,
      isNew: true,
      newAdmin,
      token: token,
    });
  } else {
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.json({
        success: false,
        error: "Invalid password",
      });
    }

    token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET);
    res.status(200).json({
      success: true,
      isNew: false,
      admin,
      token: token,
    });
  }
});

module.exports = {
  uploadEntry,
  finalizeEntry,
  adminLogin,
  getAllEntries,
  shortlistEntry,
  getEntry,
  deleteEntry,
};
