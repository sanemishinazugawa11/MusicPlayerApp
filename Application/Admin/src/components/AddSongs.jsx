import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'

function AddSongs() {

  const [name ,setName] = useState("");
  const [desc ,setDesc] = useState("");
  const [album ,setAlbum] = useState();
  const [image ,setImage] = useState();
  const [audio ,setAudio] = useState();
  const [albumsList, setAlbumsList] = useState([]); // State to hold album list

  const [isLoading, setisLoading] = useState(false)

  useEffect(()=>{
    const getSongs = async()=>{
      const res = await axios.get('http://localhost:4000/api/songs/listSongs');
      const songsList = res.data.songs
      setAlbumsList(songsList);
      console.log(songsList)
    }


    getSongs();
  },[])

  const handleButtonSubmit= async()=>{
    setisLoading(true);
    console.log("inside button codeblock" + "   "+ album , name,desc,image,audio)
    if(image && audio && name && desc && album){
    try {
      const formdata = new FormData();
      formdata.append('name', name);
      formdata.append('desc', desc);
      formdata.append('album',album);
      formdata.append('image', image);
      formdata.append('audio', audio);

      const res = await axios.post('http://localhost:4000/api/songs/upload',formdata,{
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      });

      console.log(res);
      setName("")
      setDesc("")
      setAlbum("")
      setImage("")
      setAudio("")
      setisLoading(false);
    } catch (error) {
      console.log("error occured")
    }
      
    }else{
      console.error("something is not set")
      setisLoading(false);
    }


  }

  const handleImage = (e)=>{
    const imageFile = e.target.files[0]
    setImage(imageFile)
  }
  const handleAudio = (e)=>{
    const audioFile = e.target.files[0]
    setAudio(audioFile)
  }
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleDesc=(e)=>{
    setDesc(e.target.value)
  }
  const handleAlbum=(e)=>{
    setAlbum(e.target.value)
    console.log(e.target.value)
  }

  {if(isLoading){
    return(
      <div className='w-full h-screen bg-zinc-950 rounded-lg transition duration-300 ease-in-out flex items-center justify-center'>
         <div className='w-32 h-32 border-2 border-t-8 border-t-amber-500 animate-spin rounded-full'></div>
      </div>
    )
  }}

 

  return (
    <div className='flex w-full min-h-screen bg-gradient-to-b from-gray-900 to-zinc-950 rounded-lg p-2 '>
      <div className='font-mono text-white  p-8 w-full h-full'>
        <div className='mt-5  flex flex-col gap-8  justify-start p-4'>

          <div className='flex flex-col gap-3'>
            <p className='font-semibold text-2xl '>Select the image of the song:</p>
            <input className='px-4 py-2 ' onChange={handleImage} type="file"  name='image' accept='image/*' />
          </div>

          <div className='flex  flex-col gap-3'>
            <p className='font-semibold text-2xl'>Select the audio file: </p>
            <input className='px-4 py-2 ' onChange={handleAudio} type="file" name='audio'  accept='audio/*' /></div>
        </div>
        <div className=' my-4 flex flex-col gap-4 p-4'>
          <p className='font-semibold text-2xl'>Enter the name of the song:</p>
          <input  onChange={handleName} value={name} className='w-1/2 h-12 rounded-lg bg-zinc-700 border-gray-600 border-2' type="text" />
          <p className='font-semibold text-2xl'>Enter the desc of the song:</p>
          <input onChange={handleDesc} value={desc} className='w-1/2 h-12 rounded-lg bg-zinc-700 border-gray-600 border-2' type="text" />
          <p className='font-semibold text-2xl'>Choose an album:</p>

           <select onChange={handleAlbum } value={album} className='w-1/3 border-none px-3 py-2  rounded-md bg-zinc-700 ' name="Albums">
           <option className='font-semibold rounded-md' value="">select an album</option>
           {albumsList.map((item, index) => (
              <option className='p-1.5 font-semibold overflow-y-scroll h-20' key={index} value={item.album}>
                {item.album}
              </option>
            ))}

         </select>
         


        </div>

        <button onClick={handleButtonSubmit} className='px-7 py-2 text-center bg-zinc-600 mt-8 ml-36 w-52 h-10 rounded-lg hover:bg-slate-500 transition duration-300 ease-in-out font-semibold'>Upload</button>

      
      </div>

    </div>
  )
}

export default AddSongs