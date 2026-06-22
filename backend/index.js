const express = require("express");
const router = require("./routes/userRoutes");
const connectDB = require("./config/db")


const app = express();
connectDB()
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Heyy how are you");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// index.js
app.use("/", router);


app.listen(3000, () => {
  console.log("Server running on port 3000");
});