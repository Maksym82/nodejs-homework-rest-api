const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// require('dotenv').config()
const app = require("./app");

const DB_HOST = process.env.DB_HOST;
mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
