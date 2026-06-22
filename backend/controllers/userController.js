const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
dotenv.config();
async function userSignup(req, res) {
    const { name, email, password } = req.body;

    const userId = Math.floor(1000 + Math.random() * 9000);
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.send("User already exists!");
    }
    await User.create({
        userId,
        name,
        email,
        password: hashedPassword
    });

    res.render("home", {
    userId,
    name
});
}

async function userLogin(req, res) {
    const { userId, password } = req.body;

    const user = await User.findOne({ userId });

    if (!user) {
        return res.send("Invalid User!");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.send("Invalid Password");
    }
    const token = jwt.sign(
        {
            userId: user.userId,
            name: user.name,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );

    res.render("home", {
        userId: user.userId,
        name: user.name,
        token
    });

    

}

module.exports = { userSignup,userLogin };