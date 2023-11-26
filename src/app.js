const express = require("express");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const authenticationRoutes = require("./routes/authentication");
const contestRoutes = require("./routes/Contest");
const userRoutes = require("./routes/Users");

applyMiddleware(app);
app.use(authenticationRoutes);
app.use(contestRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("ContestHub is running");
});

app.all("*", (req, res, next) => {
  const err = new Error(`The Requested Url is invalid: [${req.url}]`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`ContestHub is running on port ${port}`);
  });
};
main();
