import React from 'react'
import { useNavigate } from 'react-router-dom'

function Albums({name,image,id,desc,bgcolor}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/album/:${id}`)} className='w-52 bg-stone-950 p-2 text-white transition duration-300 ease-in-out hover:bg-slate-500 hover:cursor-pointer rounded'>
        <img className='rounded' src={image} alt="" />
        <p className='text-white font-mono text-md mt-2 font-semibold'>{name}</p>
        <p className='text-white font-mono text-sm mt-1'>{desc}</p>

    </div>
  )
}

export default Albums