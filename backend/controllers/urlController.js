const Url = require("../models/urlModel");
const { nanoid } = require("nanoid");

async function createShortUrl(req, res) {
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