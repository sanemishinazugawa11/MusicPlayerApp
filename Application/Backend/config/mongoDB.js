const mongoose = require("mongoose");

const connect =async()=>{
    await mongoose.connect('YOUR_MONGODB_URL');
    console.log("Connected to Database successfully");
}

module.exports = connect;