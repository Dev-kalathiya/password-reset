
// const express = require('express');
// const connection = require('./config/db');

// const app = express();

// app.use(express.json());

// // login signup and send email for forgot password






// const PORT = process.env.PORT || 5060;

// app.listen(PORT, () => {
//   console.log("listening on port on" + PORT);
//   connection();
  
// });


const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./router/auth");

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes );

const PORT = process.env.PORT || 5060;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
