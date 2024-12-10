import React, { useContext } from 'react'
import { PlayerContext } from '../../Context/Context'

function Songs({name,image,id,desc,bgcolor}) {
    const {playWithId} = useContext(PlayerContext)
   
    return (
        <div  onClick={()=>{playWithId(id)}} className='w-52 bg-slate-800 transition duration-300 ease-in-out p-2 text-white hover:bg-slate-500 hover:cursor-pointer rounded'>
            <img className='rounded' src={image} alt="" />
            <p className='text-white font-mono text-md mt-2 font-semibold'>{name}</p>
            <p className='text-white font-mono text-sm mt-1'>{desc}</p>

        </div>
    )
}

export default Songs