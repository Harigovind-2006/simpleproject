const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
dotenv.config();
async function userSignup(req, res) {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const userId = Math.floor(1000 + Math.random() * 9000);

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            userId,
            name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message: "Signup successful",
            userId,
            name
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
}

async function userLogin(req, res) {
    const { userId, password } = req.body;

    const user = await User.findOne({ userId });

    if (!user) {
        return res.status(400).json({
            message: "Invalid User!"
        });
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