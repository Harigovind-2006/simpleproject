const Url = require("../models/urlModel");
const { nanoid } = require("nanoid");

async function shortenUrl(req, res) {
    const { redirectURL } = req.body;

    const shortId = nanoid(6);

    await Url.create({
        shortId,
        redirectURL
    });

    res.json({
        shortId
    });
}
async function redirectUrl(req, res) {
    const { shortId } = req.params;

    const entry = await Url.findOne({ shortId });

    if (!entry) {
        return res.send("URL Not Found");
    }

    res.redirect(entry.redirectURL);
}

module.exports = { shortenUrl, redirectUrl };                                       