import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='  grid col-span-1 h-auto p-2 '>
      <div className=' flex flex-col  h-[100%] gap-2 '>
        <div className='bg-slate-950 w-full h-[20%] rounded text-white flex flex-col justify-center py-3 text-sm px-4'>
          <div onClick={()=>navigate("/")} className='flex gap-3 ml-4 items-center justify-start cursor-pointer transition duration-300 ease-in-out hover:bg-slate-800 rounded p-2 '>
            <img  className='w-7 h-6' src={assets.home_icon} alt="" />
            <p className='text-xl font-mono font-semibold tracking-wide mt-1 p-2'>Home</p>
          </div>
          <div className='flex gap-3 ml-4 items-center justify-start p-2 transition duration-300 ease-in-out hover:bg-slate-800 rounded'>
            <img className='w-7 h-6' src={assets.search_icon} alt="" />
            <p className='text-xl font-mono font-semibold tracking-wide mt-2 p-2'>Search</p>
          </div>

        </div>
        <div className='bg-slate-950 w-full h-[100%] flex flex-col gap-5 rounded text-white px-3 py-4'>
          <div className=' p-3 flex items-center justify-between'>
            <div className='flex items-center justify-center gap-3'>
              <img className='w-7 ' src={assets.stack_icon} alt="" />
              <span className='font-semibold font-mono mt-1'>Your library</span>
            </div>
            <div className='flex gap-4'>
              <img className='w-5 ' src={assets.plus_icon} alt="" />
              <img className='w-5 ' src={assets.arrow_icon} alt="" />
            </div>
          </div>

          <div className='bg-slate-800 rounded-md text-left flex flex-col gap-2 p-5'>
            <p className='font-mono font-bold text-xl'>Create your first playlist</p>
            <p className='font-mono font-semibold'>Its easy we will help you</p>
            <p className='font-mono font-semibold bg-slate-100 w-44 text-center rounded-lg text-black p-2'>Create playlist</p>
          </div>

          <div className='bg-slate-800 rounded-md text-left flex flex-col gap-2 p-5'>
            <p className='font-mono font-bold text-xl'>Lets find some podcasts to follow</p>
            <p className='font-mono font-semibold'>We will keep you update on new episodes</p>
            <p className='font-mono font-semibold bg-slate-100 w-44 text-center rounded-lg text-black p-2'>Browse podcasts</p>
          </div>
        </div>


      </div>

      
    </div>
  )
}

export default Sidebar