import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate();
  return (
   
      <div className=' h-20 rounded'>
        <div className='flex  justify-between '>
          <div className='flex gap-0 mt-3 cursor-pointer '>
            <img onClick={()=>navigate(-1)} className='w-10 mt-4 ml-7 bg-zinc-950 transition duration-300 ease-in-out  p-2 rounded-full hover:bg-slate-800' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(1)} className='w-10 mt-4 ml-7 bg-zinc-950 transition duration-300 ease-in-out p-2 rounded-full hover:bg-slate-800' src={assets.arrow_right} alt="" />
          </div>
          <div className='text-black flex gap-3 items-center mt-4 justify-start mr-5'>
            <p className='font-mono bg-slate-50  px-4 py-2 cursor-pointer transition duration-300 ease-in-out hover:bg-sky-800 hover:text-white font-semibold text-center rounded'>Explore premium</p>
            <p className='font-mono bg-slate-50  px-4 py-2 cursor-pointer transition duration-300 ease-in-out hover:bg-sky-800 hover:text-white font-semibold text-center rounded'>Install app</p>
            <p className='font-mono bg-green-400 p-2 cursor-pointer rounded-full w-10 text-center'>U</p>
          </div>
        </div>

      
      </div>
    
  )
}

export default NavBar