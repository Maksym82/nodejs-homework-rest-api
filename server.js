const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// require('dotenv').config()
const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;
// const DB_HOST = process.env.DB_HOST;
mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  app.listen(3000, () => {
    console.log("Server running. Use our API on port: 3000")
  })
