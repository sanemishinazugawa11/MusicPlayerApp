const mongoose = require("mongoose");

const connect =async()=>{
    await mongoose.connect('mongodb+srv://ksbhuvi2004:0HWE4DwK4HxrXi5K@cluster0.rfv5q.mongodb.net/spotify');
    console.log("Connected to Database successfully");
}

module.exports = connect;