const express = require("express");
const { uploadEntry, currentEntry } = require("../controllers/entryController");
const router = express.Router();

router.post("/uploadentry", uploadEntry);

module.exports = router;
