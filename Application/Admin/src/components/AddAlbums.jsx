import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'

function AddAlbums() {

  const [name ,setName] = useState("");
  const [desc ,setDesc] = useState("");
  const [image ,setImage] = useState();
  const [bgColor ,setbgColor] = useState("#000000");


  const [isLoading, setisLoading] = useState(false)


  const handleButtonSubmit= async()=>{
    setisLoading(true);
    console.log("inside button codeblock" + "   "+ name,desc,image,bgColor)
    if(image && bgColor && name && desc ){
    try {
      const formdata = new FormData();
      formdata.append('name', name);
      formdata.append('desc', desc);
      formdata.append('bgColor',bgColor);
      formdata.append('image', image);
    

      const res = await axios.post('http://localhost:4000/api/albums/upload',formdata,{
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      });

      console.log(res);
      setName("")
      setDesc("")
      setbgColor("")
      setImage("")
     
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
  const handlebgColor = (e)=>{
    const bgcolor = e.target.value
    setbgColor(bgcolor)
  }
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleDesc=(e)=>{
    setDesc(e.target.value)
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
            <p className='font-semibold text-2xl '>Select the image of the album:</p>
            <input className='px-4 py-2 ' onChange={handleImage} type="file"  name='image' accept='image/*' />
          </div>

          <div className='flex  flex-col gap-3'>
            <p className='font-semibold text-2xl'>Select the background color: </p>
            <input className=' bg-zinc-500 rounded-lg w-40 h-8' onChange={handlebgColor} type="color" value={bgColor} name='bgColor' /></div>
        </div>
        <div className=' my-4 flex flex-col gap-4 p-4'>
          <p className='font-semibold text-2xl'>Enter the name of the album:</p>
          <input  onChange={handleName} value={name} className='w-1/2 h-12 rounded-lg bg-zinc-700 border-gray-600 border-2' type="text" />
          <p className='font-semibold text-2xl'>Enter the desc of the album:</p>
          <input onChange={handleDesc} value={desc} className='w-1/2 h-12 rounded-lg bg-zinc-700 border-gray-600 border-2' type="text" />
        </div>

        <button onClick={handleButtonSubmit} className='px-7 py-2 text-center bg-zinc-600 mt-8 ml-36 w-52 h-10 rounded-lg hover:bg-slate-500 transition duration-300 ease-in-out font-semibold'>Upload</button>

      
      </div>

    </div>
  )
}

export default AddAlbums