const mongoose = require('mongoose');

require("dotenv").config();
const url = process.env.DB_URL;
const connection = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};


module.exports =connection