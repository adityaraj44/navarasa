const express = require("express");
const { uploadEntry } = require("../controllers/entryController");
const router = express.Router();

router.post("/", uploadEntry);

module.exports = router;
