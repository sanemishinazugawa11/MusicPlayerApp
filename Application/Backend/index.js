const express = require("express");
const app = express();
const cors = require("cors");
const Songrouter = require("./Routes/SongsRoutes");
const Albumrouter = require("./Routes/AlbumRoutes");
const connect = require("./config/mongoDB");
const {  connectCloudinary } = require("./config/cloudinary");

connect();
connectCloudinary();

app.use(cors());
app.use(express.json());

app.use("/api/songs",Songrouter);
app.use("/api/albums",Albumrouter);

app.listen(4000,function(){
    console.log("app is running on port 4000")
})
