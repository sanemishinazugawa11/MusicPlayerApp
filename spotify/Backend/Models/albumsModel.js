const mongoose = require("mongoose")


const AlbumSchema = new mongoose.Schema({
    name:{ type: String , required :true },
    desc:{ type: String , required :true },
    bgColor:{ type: String , required :true },
    image:{ type: String , required :true },

})

const albumModel = mongoose.model('albums',AlbumSchema);

module.exports = albumModel;