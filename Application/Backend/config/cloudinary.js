const cloudinary = require('cloudinary').v2;

const connectCloudinary = ()=>{
    cloudinary.config({
        cloud_name: "dbsrqazxi",
        api_key: "732396833681658",
        api_secret: "rP-d6wbEJG20bbMMg3U8G9MlC08"
    });

    console.log("connected to cloudinary successfully");
}

module.exports = {connectCloudinary};