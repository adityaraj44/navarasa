const express = require("express");
const {
  uploadEntry,
  finalizeEntry,
} = require("../controllers/entryController");
const router = express.Router();

router.post("/uploadentry", uploadEntry);
router.put("/finalizeentry/:id", finalizeEntry);

module.exports = router;
