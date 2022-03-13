const express = require("express");
const {
  uploadEntry,
  finalizeEntry,
  adminLogin,
  getAllEntries,
  shortlistEntry,
  getEntry,
  deleteEntry,
  editEntry,
  editSettings,
  getSettings,
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
router.put("/admin/entries/entry/editentry/:id", ensureAuth, editEntry);
router.put("/admin/settings/:id", ensureAuth, editSettings);
router.get("/settings", getSettings);

module.exports = router;
