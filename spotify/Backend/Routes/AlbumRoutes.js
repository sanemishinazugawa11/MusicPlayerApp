const express = require("express");
const { addAlbum, listAlbum, removeAlbum } = require("../controllers/AlbumController");
const upload = require("../middleware/multer");
const Albumrouter = express.Router();

Albumrouter.post("/upload" ,upload.single('image'), addAlbum)

Albumrouter.get("/listAlbums", listAlbum)

Albumrouter.post("/remove",removeAlbum)

module.exports = Albumrouter;