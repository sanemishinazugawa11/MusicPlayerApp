const express = require("express");
const { addSong, listSong, removeSong } = require("../controllers/SongController");
const upload = require("../middleware/multer");
const Songrouter = express.Router();

Songrouter.post("/upload" , upload.fields([{name:'image', maxCount:1},{name:'audio',maxCount:1}]),addSong)

Songrouter.get("/listSongs",listSong)

Songrouter.post("/removeSong",removeSong)

module.exports = Songrouter;