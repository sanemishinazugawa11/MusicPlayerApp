import React, { useContext } from 'react'
import Albums from './Albums'
import NavBar from './NavBar'
// import { songsData } from '../assets/assets'
import Songs from './Songs'
import { PlayerContext } from '../../Context/Context'



function DisplayHome() {
    const { albumsData, setalbumsData,songsData,setsongsData } = useContext(PlayerContext)
    return (
        <div className='bg-slate-950 p-2 h-auto grid col-span-3 rounded'>
            <div className='flex flex-col'>
                <NavBar />

                <div className='mt-8 flex gap-5 ml-10 '>
                    <p className='font-mono p-2 bg-slate-100 rounded w-26 px-4 py-2 transition duration-300 ease-in-out hover:bg-sky-800 hover:text-white cursor-pointer font-semibold text-center'>All</p>
                    <p className='font-mono p-2 bg-slate-100 rounded w-26 px-4 py-2 transition duration-300 ease-in-out hover:bg-sky-800 hover:text-white cursor-pointer font-semibold text-center'>Music</p>
                    <p className='font-mono p-2 bg-slate-100 rounded w-26 px-4 py-2 transition duration-300 ease-in-out hover:bg-sky-800 hover:text-white cursor-pointer font-semibold text-center'>Podcasts</p>
                </div>
                <div className='flex flex-wrap gap-3 overflow-auto m-8'>
                {albumsData && albumsData.length > 0 ? (
                        albumsData.map((item, index) => (
                            <Albums key={index} name={item.name} desc={item.desc} id={item._id} bgcolor={item.bgColor} image={item.image} />
                        ))
                    ) : (
                        null
                    )}
                </div>
                <div className='flex flex-wrap gap-3 overflow-auto m-8'>
                   {songsData &&  songsData.length>0 ? (
                     songsData.map((item, index) => {
                        return (
                            <Songs key={index} name={item.name} desc={item.desc} id={item._id} bgcolor={item.bgColor} image={item.image} />
                        )
                    }) 
                   ):(
                    null
                   )
                }
                </div>
            </div>
        </div>



    )
}

export default DisplayHome