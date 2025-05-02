const express = require("express");

const router = express.Router();

const authenticateToken = require("../middleware/auth");

router.get("/", authenticateToken, (req, res) => {
  res.json({
    msg: "You accessed protected data!",
    user: req.user,
  });
});

module.exports = router;