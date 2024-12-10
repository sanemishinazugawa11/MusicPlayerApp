const albumModel = require('../Models/albumsModel');

const cloudinary = require('cloudinary').v2;


const addAlbum = async(req,res)=>{

    try {
        
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;

        const imageUploaded = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});

        const albumData = {
            name,
            desc,
            bgColor,
            image:imageUploaded.secure_url,
        }

        const album = albumModel(albumData)
        await album.save();

        res.json({
            success:true,
            message:"album added successfully"
        })


    } catch (error) {

        res.json({
            success:false,
            message:"something went wrong, couldnt add the album"
        })
        
    }


}

const listAlbum = async(req,res)=>{
        try {
            
            const albums = await albumModel.find({})
            res.json({
                success:true,
                message:"albums found",
                albums:albums,
            })

        } catch (error) {

            res.json({
                success:false,
                message:"could fetch all the albums"
            })
            
        }
}

const removeAlbum = async(req,res)=>{

    try {
        
        const id = req.body.id;
        await albumModel.findByIdAndDelete(id);

        res.json({
            success:false,
            message:"album removed successfully"
        })


    } catch (error) {

        res.json({
            success:false,
            message:"something went wrong couldnt remove the album"
        })
        
    }

}


module.exports = {addAlbum, listAlbum,removeAlbum};