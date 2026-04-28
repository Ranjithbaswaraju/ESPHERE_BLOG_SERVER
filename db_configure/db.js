const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URL;

async function ConnectDB() {
  try {
    await mongoose.connect(uri, { dbName: "project" });
    console.log("Database connected Successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { ConnectDB };
