const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_CONNECTION_URI;

async function dbConnect() {
    mongoose.connect(uri).then(() => {
        console.log("Successfully connected to MongoDB!");
    }).catch((error) => {
        console.log("Unable to connect");
        console.log(error);
    })
}

module.exports = dbConnect;