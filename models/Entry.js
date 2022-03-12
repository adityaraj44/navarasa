const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema(
  {
    submittername: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    postaladdress: {
      type: String,
      required: true,
    },
    audio: {
      type: String,
      required: true,
    },
    songtitle: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    artistCategory: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
    },
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    additionalinfo: {
      type: String,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    isSubmitted: {
      type: Boolean,
      default: false,
    },
    isShortlisted: {
      type: Boolean,
      default: false,
    },
    refId: {
      type: String,
    },
    dateSubmitted: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Entry", EntrySchema);
