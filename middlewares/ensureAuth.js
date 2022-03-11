const jwt = require("jsonwebtoken");

const ensureAuth = (req, res, next) => {
  const token = req.header("navarasa-auth-token");

  if (!token) {
    throw new Error("Not authenticated");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    throw new Error("Not authenticated");
  }
};

module.exports = { ensureAuth };
