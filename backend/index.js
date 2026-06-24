const express = require("express");
const router = require("./routes/userRoutes");
const connectDB = require("./config/db")
const dotenv = require("dotenv");
const urlRoutes = require("./routes/urlRoutes");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
connectDB()
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Heyy how are you");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// index.js
app.use("/", router);
app.use("/", urlRoutes);

app.listen(PORT || 3000, () => {
  console.log(`Server running on port ${PORT || 3000}`);
});