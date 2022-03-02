const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const path = require("path");

// using dotenv to load environment variables
dotenv.config();

// Create a new express application instance
const app = express();

// using cors
app.use(cors());

// using morgan
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// parse application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// static files for production
__dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// The port the express app will listen on
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(colors.green.bold(`Server started on port ${port}`));
});
