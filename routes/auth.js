const express = require("express");
const { signup, login, forgotPassword, resetPassword } = require("../controllers/authController");

const router = express.Router();
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/forgot-password", (req, res) => {
  res.render("forgotPassword");
});

router.get("/reset-password/:token", (req, res) => {
  const { token } = req.params;
  res.render("resetPassword", { token });
});
router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
