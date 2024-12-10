import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  assets } from '../assets/assets'; // Assuming albumsData is an array of albums
import NavBar from './NavBar';
import { PlayerContext } from '../../Context/Context'

function AlbumsPage() {
    const { id } = useParams();
    const albumId = id.split(':').pop(); // Convert id to a number
    console.log((albumId));
    const { albumsData, setalbumsData,playWithId,songsData,setsongsData } = useContext(PlayerContext);
    const [Albumdata, setAlbumData] = useState({})

    useEffect(() => {
        if (albumsData && albumsData.length > 0) {
            const foundAlbum = albumsData.find((item) => item._id === albumId);
            if (foundAlbum) {
                setAlbumData(foundAlbum); 
                console.log(foundAlbum);// Set the found album to state
            }
        }
    }, [albumId, albumsData])

    if(!Albumdata){
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-20 h-20 border-4 border-t-2 border-t-green-500 animate-spin'></div>

        </div>
    }

    return (
        <div  style={{
            backgroundColor: Albumdata.bgColor,
            backgroundImage: `linear-gradient(to bottom left, ${Albumdata.image}, #111111)`,

        }}className={`p-2 h-auto grid col-span-3 rounded brightness-90`}>
            <div className='flex flex-col'>
                <NavBar />
                <div className='flex gap-8 items-center mt-8 ml-5'>
                    <img className='w-60   rounded shadow-slate-950 shadow-2xl' src={Albumdata.image} alt="" />
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-5xl text-white  font-mono font-bold'>{Albumdata.name}</h1>
                        <h1 className='text-2xl text-white  font-mono font-bold'>{Albumdata.desc}</h1>
                    </div>
                </div>
                <div className='bg-transparent text-white font-mono font-semibold  flex items-center justify-between mt-10 p-3'>
                    <p>#</p>
                    <p>Songs</p>
                    <p>Description</p>
                    <img className='w-5 ' src={assets.clock_icon} alt="" />

                </div>
                <div className='flex flex-col'>
                   {Albumdata && songsData ? 
                   ( songsData.filter((item)=> item.album === Albumdata.name).map((item, index) => {
                    return (
                        <div onClick={() => {
                            playWithId(item._id)

                        }} key={index} className='flex cursor-pointer font-mono text-md font-semibold text-white justify-between items-center p-2  rounded  hover:bg-slate-800'>
                            <p>{index }</p>
                            <div className=' flex w-72 p-2 gap-28 items-center'><img className='w-16 p-1 rounded-full' src={item.image} alt="" />
                                <p>{item.name}</p>
                            </div>
                            <p>{item.desc}</p>
                            <p>{item.duration}</p>
                        </div>
                    );
                }))
                :
                (null)
                }
                </div>
            </div>
        </div>
    );
}

export default AlbumsPage;
