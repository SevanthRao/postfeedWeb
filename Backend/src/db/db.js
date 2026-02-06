const mongoose = require("mongoose")
require("dotenv").config()


async function connectDb() {
    await mongoose.connect(process.env.MONGO_URL)
    
    console.log("Mongo Db Connected Successfully...");
}

module.exports = connectDb