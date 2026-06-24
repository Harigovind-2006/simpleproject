const express = require("express");
const urlController = require("../controllers/urlController");
const router = express.Router();
router.get("/shorten", (req, res) => {
    res.render("urlShorten");
});
router.post("/shorten", urlController.shortenUrl);
router.get("/:shortId", urlController.redirectUrl);
module.exports = router;
