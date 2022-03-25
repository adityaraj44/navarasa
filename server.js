const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const path = require("path");
const fileUpload = require("express-fileupload");
const { errorHandler } = require("./middlewares/errorHandler");
const connectDB = require("./config/db");

// using dotenv to load environment variables
dotenv.config();

// db
connectDB();

// Create a new express application instance
const app = express();

// using cors
app.use(cors());

// using morgan
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(fileUpload());
// parse application/x-www-form-urlencoded
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

// Routes
app.use("/", require("./routes/entry"));

// use custom error handler
app.use(errorHandler);

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
