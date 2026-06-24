const express = require("express");
const { userSignup, userLogin } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/userMiddleWare");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/profile", authMiddleware, (req, res) => {
  res.json(req.user);
});

module.exports = router;