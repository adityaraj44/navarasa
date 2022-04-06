const asyncHandler = require("express-async-handler");
const Entry = require("../models/Entry");
const AWS = require("aws-sdk");
const voucherCodes = require("voucher-code-generator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Settings = require("../models/Settings");
const nodeMailer = require("nodemailer");
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
  let transporter = nodeMailer.createTransport({
    host: "smtppro.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: "contact@adinovacreative.com",
      pass: "Adi!123bdAts8",
    },
  });

  const mailList = [`${entry.email}`, "contact@adinovacreative.com"];

  mailList.forEach((email) => {
    if (email === "contact@adinovacreative.com") {
      const mailOptions = {
        from: "contact@adinovacreative.com", // sender address
        to: "contact@adinovacreative.com",
        subject: "New submission recieved!", // Subject line
        html: `<p>Ref Id:</p><br /><strong>#${entry.refId}</strong>`, // plain text body
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          throw new Error(err);
        }
      });
    } else {
      const mailOptionsUser = {
        from: "contact@adinovacreative.com", // sender address
        to: email,
        subject: "We have received your Indie Music Competition entry!", // Subject line
        html: `<div style="margin:0; padding:0; text-align: center; font-family: Open Sans, sans-serif">
        <div style="width: 100%; height:100px; background-color: #FAD01C;
        ">

            <img width="60px" height="60px" style="padding-top: 70px;"
                src="https://navarasa.s3.ap-south-1.amazonaws.com/Adinova+Creative+Logo+Circle.png" alt="adinova-logo">



        </div>
        <div style="background-color: #2C2553; padding: 40px 30px 80px">
            <p style="color: #DD29A6; font-size:40px; font-weight: 100;">We got your entry!</p>
            <p style="color: white; font-size:16px;">Your entry to the Indie Tamil Song Competition has been received.
            </p>
            <p style="margin-top: 40px;color: #fad01c; font-size:16px; font-weight: 700">Your ref id is:
                #${entry.refId}.</p>
            <p style="margin-top: 40px;color: white; font-size:16px;">
                We are excited to listen to your song. You will hear from us if your song has been shortlisted and when
                the winners have been selected.

            </p>
            <p style="margin-top: 35px;color: white; font-size:16px;"> Feel free to contact us regarding any queries
                relating to your
                entry. Thank you.</p>
            <p style="margin-top: 85px;color: white; font-size:14px;">Yours sincerely,</p>
            <p style="color: #DD29A6; font-size:14px; font-weight:700">The Adinova Creative team</p>
        </div>
        <div style="background-color: #fad01c; height: 150px; width:100%;">
            <div
                style="padding-top:40px;display: flex; flex-direction: row; justify-content:center; align-items:center;">
                <div style="margin-right: 20px;"><a href="https://www.instagram.com/adinovacreative" target="_blank">
                        <img width="40px" height="40px" src="https://navarasa.s3.ap-south-1.amazonaws.com/Insta.png"
                            alt="instagram">
                    </a></div>
                <div style="margin-right: 20px;"><a href="https://twitter.com/adinovacreative" target="_blank"><img
                            width="40px" height="40px" src="https://navarasa.s3.ap-south-1.amazonaws.com/twitter.png"
                            alt="twitter"></a></div>
                <div style="margin-right: 20px;"><a href="https://www.youtube.com/channel/UC_JxeDKSWSR_p55PYyitPHQ"
                        target="_blank"><img width="40px" height="40px"
                            src="https://navarasa.s3.ap-south-1.amazonaws.com/YT.png" alt="youtube"></a></div>
                <div><a href="https://t.me/adinovacommunity" target="_blank"><img width="40px" height="40px"
                            src="https://navarasa.s3.ap-south-1.amazonaws.com/telegram.png" alt="telegram"></a></div>
            </div>
            <p style="color: #2C2553; font-size:14px; font-weight:700">© Copyright Adinova 2022</p>
        </div>
    </div>`,
      };

      transporter.sendMail(mailOptionsUser, function (err, info) {
        if (err) {
          throw new Error(err);
        }
      });
    }
  });

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

// @desc    Edit entry
// @route   PUT /admin/entries/entry/editentry/:id
// @access  Private

const editEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);
  if (!entry) {
    throw new Error("Entry not found");
  }

  const {
    dateSubmitted,
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
  } = req.body;

  if (entry.audio === audio) {
    entry.dateSubmitted = dateSubmitted;
    entry.submittername = submittername;
    entry.role = role;
    entry.contact = contact;
    entry.country = country;
    entry.state = state;
    entry.city = city;
    entry.postaladdress = postaladdress;
    entry.email = email;
    entry.artist = artist;
    entry.songtitle = songtitle;
    entry.artistCategory = artistCategory;
    entry.instagram = instagram;
    entry.youtube = youtube;
    entry.twitter = twitter;
    entry.additionalinfo = additionalinfo;

    await entry.save();

    res.status(200).json({
      success: true,
      entry,
    });
  } else {
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

    entry.dateSubmitted = dateSubmitted;
    entry.submittername = submittername;
    entry.role = role;
    entry.contact = contact;
    entry.country = country;
    entry.state = state;
    entry.city = city;
    entry.postaladdress = postaladdress;
    entry.email = email;
    entry.artist = artist;
    entry.songtitle = songtitle;
    entry.artistCategory = artistCategory;
    entry.instagram = instagram;
    entry.youtube = youtube;
    entry.twitter = twitter;
    entry.additionalinfo = additionalinfo;
    entry.audio = audioURI;
    await entry.save();

    res.status(200).json({
      success: true,
      entry,
    });
  }
});

// @desc    Get Settings
// @route   GET /admin/settings/
// @access  Public

const getSettings = asyncHandler(async (req, res) => {
  const homeDetail = await Settings.findOne({
    value: 2022,
  });

  if (!homeDetail) {
    throw new Error("Not found");
  }

  res.status(200).json({
    success: true,
    homeDetail,
  });
});

// @desc    Settings
// @route   PUT /admin/settings/:id
// @access  Private

const editSettings = asyncHandler(async (req, res) => {
  const {
    details,
    competitionPeriod,
    entryFee,
    eligibility,
    isFee,
    firstPrize,
    secondPrize,
    thirdPrize,
    password,
  } = req.body;
  const homeDetail = await Settings.findOne({
    value: 2022,
  });

  if (!homeDetail) {
    throw new Error("Something went wrong. Please try again!");
  }

  const admin = await User.findById(req.params.id);

  if (!admin) {
    throw new Error("Not authorized");
  }

  if (admin.role !== "superadmin") {
    throw new Error("Not authorized");
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.json({
      success: false,
      message: "Incorrect password!",
    });
  } else {
    homeDetail.details = details;
    homeDetail.competitionPeriod = competitionPeriod;
    homeDetail.entryFee = entryFee;
    homeDetail.eligibility = eligibility;
    homeDetail.isFee = isFee;
    homeDetail.firstPrize = firstPrize;
    homeDetail.secondPrize = secondPrize;
    homeDetail.thirdPrize = thirdPrize;
    await homeDetail.save();

    res.status(200).json({
      success: true,
      homeDetail,
    });
  }
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
    return res.json({
      success: false,
      error: "Invalid credentials",
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
  editEntry,
  getSettings,
  editSettings,
};
