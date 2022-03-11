const express = require("express");
const {
  uploadEntry,
  finalizeEntry,
  adminLogin,
  getAllEntries,
  shortlistEntry,
  getEntry,
  deleteEntry,
} = require("../controllers/entryController");
const router = express.Router();
const { ensureAuth } = require("../middlewares/ensureAuth");

router.post("/uploadentry", uploadEntry);
router.put("/finalizeentry/:id", finalizeEntry);
router.post("/admin/login", adminLogin);
router.get("/admin/entries", ensureAuth, getAllEntries);
router.put("/admin/entries/shortlist/:id", ensureAuth, shortlistEntry);
router.get("/admin/entries/entry/:id", ensureAuth, getEntry);
router.delete("/admin/entries/entry/delete/:id", ensureAuth, deleteEntry);

module.exports = router;
