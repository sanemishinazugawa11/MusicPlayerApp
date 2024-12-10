import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function SideBar() {
    const navigate = useNavigate();

    return (

        <div className='flex flex-col w-96 min-h-screen items-center rounded-lg p-3 bg-gradient-to-b from-gray-950 to-gray-950 '>

            <div onClick={()=>navigate('/')} className='cursor-pointer font-noto-serif-devanagari font-bold text-7xl  mt-14  text-amber-300'>ध्वनि </div>
       

            <div className='flex flex-col  gap-9 mt-20'>
                <NavLink to="/addsongs" className='font-Josefin-Sans text-center text-lg font-semibold bg-amber-300 px-6 py-2  rounded-lg text-black w-52 hover:bg-yellow-300 cursor-pointer transition-colors duration-300 ease-in-out'>Add Songs</NavLink>
                <NavLink to="/listsongs" className='font-Josefin-Sans text-center text-lg font-semibold bg-amber-300 px-6 py-2  rounded-lg text-black w-52 hover:bg-yellow-300 cursor-pointer transition-colors duration-300 ease-in-out'>List Songs</NavLink>
                <NavLink to="/addalbums" className='font-Josefin-Sans text-center text-lg font-semibold bg-amber-300 px-6 py-2  rounded-lg text-black w-52 hover:bg-yellow-300 cursor-pointer transition-colors duration-300 ease-in-out'>Add Albums</NavLink>
                <NavLink to="/listalbums" className='font-Josefin-Sans text-center text-lg font-semibold bg-amber-300 px-6 py-2  rounded-lg text-black w-52 hover:bg-yellow-300 cursor-pointer transition-colors duration-300 ease-in-out'>List Albums</NavLink>
            </div>
        </div>
    )
}

export default SideBar