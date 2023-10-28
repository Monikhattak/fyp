const mongoose = require("mongoose");
require("dotenv").config();
const mongo_url=process.env.MONGO_URL

const connectDB = mongoose.connect("mongodb+srv://finalproject:final.1234@final-web.g4nmix8.mongodb.net/");

module.exports = connectDB;
