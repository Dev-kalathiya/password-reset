
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
const authRoutes = require("./routes/auth");
const connection = require("./config/db");
const path = require("path");


dotenv.config();
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/api/auth", authRoutes );

const PORT = process.env.PORT || 5060;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)
  connection();

});
