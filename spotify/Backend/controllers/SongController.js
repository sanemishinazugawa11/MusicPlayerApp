
const cloudinary = require('cloudinary').v2;

const songModel = require('../Models/songsModel')


const addSong = async(req,res)=>{

    try {
        
        const name = req.body.name;
        const desc = req.body.desc;
        const album= req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        const audioUpload = await cloudinary.uploader.upload(audioFile.path ,{resource_type:"video"});
        const imageUpload = await cloudinary.uploader.upload(imageFile.path , { resource_type:"image"});


        const duration =`${ Math.floor(audioUpload.duration/60) } : ${Math.floor(audioUpload.duration%60)}`
        const songData = {
            name : name , 
            desc : desc,
            album : album,
            image: imageUpload.secure_url,
            file : audioUpload.secure_url,
            duration: duration,
        }

        const song =  songModel(songData);
        await song.save();

        res.json({
            success : true,
            message:"song added",
        })
        

    } catch (error) {
        res.json({
            success: false,
            message:"some error occured"
        })
    }


}

const listSong = async(req,res)=>{
    try {
        const allsongs = await songModel.find({});

        res.json({
            success: true,
            songs: allsongs
        })

    } catch (error) {
        res.json({
            success:false,
            message:"something went wrong"
        })
    }
}

const removeSong= async(req,res)=>{
    try {
        const id = req.body.id
        await songModel.findByIdAndDelete(id);

    res.json({success:true, message:"song removed"});

    } catch (error) {
        res.json({
            success:false,
            message:"something went wrong , couldnt remove the song",
            error:error
        })
    }
}


module.exports = {addSong, listSong,removeSong}