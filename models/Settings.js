const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    competitionPeriod: {
      type: String,
      required: true,
    },
    entryFee: {
      type: String,
    },
    isFee: {
      type: Boolean,
      default: false,
    },
    eligibility: {
      type: String,
      required: true,
    },
    firstPrize: {
      type: Number,
      required: true,
    },
    secondPrize: {
      type: Number,
      required: true,
    },
    thirdPrize: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Settings", SettingsSchema);
