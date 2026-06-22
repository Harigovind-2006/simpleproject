const express = require("express");
const { userSignup,userLogin } = require("../controllers/userController");
const {authMiddleware} = require("../middlewares/userMiddleWare")
const router = express.Router();

// userRoutes.js
router.get("/signup", (req, res) => {
    res.render("signup");
});
router.get("/login", (req, res) => {
    res.render("login");
});
router.get("/profile", authMiddleware, (req, res) => {
    res.json(req.user);
});


router.post("/signup", userSignup);
router.post("/login", userLogin);


module.exports = router;