import React, { useContext, useRef, useState } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../../Context/Context';

function MusicBar() {

    const { audioRef,
        isPlaying, setisPlaying,
        track, setTrack, play,pause,isLoading } = useContext(PlayerContext);

     


    return track ? (

        <div className='bg-sky-950 fixed bottom-0 h-[90px] w-full rounded  '>
            <div className=' h-full  flex items-center justify-between p-6'>
                <div className='bg-transparent p-2 w-[25%]'>
                    <div className='flex gap-5 items-center justify-start'>
                        <img className='w-16 h-16 rounded-full' src={track.image} alt="" />
                        <div className='flex flex-col mt-2 leading-none text-white'>
                            <p className='text-xl font-semibold font-mono'>{track.name}</p>
                            <p className='text-lg  font-mono'>{track.desc}</p>
                        </div>
                    </div>
                </div>

                <div className='bg-transparent w-[36%] flex flex-col gap-3 p-10'>
                    <div className='flex justify-center gap-2 cursor-pointer '>
                        <img className='w-9 p-2 hover:bg-zinc-900 transition duration-300 ease-in-out ' src={assets.shuffle_icon} alt="" />
                        <img className='w-9 p-2 hover:bg-zinc-900  transition duration-300 ease-in-out' src={assets.arrow_left} alt="" />
                      
                        {isPlaying? (<img onClick={pause} className='w-9 p-2 hover:bg-zinc-900 transition duration-300 ease-in-out ' src={assets.pause_icon} alt="" />
                       ):(<img onClick={play} className='w-9 p-2 hover:bg-zinc-900' src={assets.play_icon} alt="" />)
                       }
                        <img className='w-9 p-2 hover:bg-zinc-900 transition duration-300 ease-in-out ' src={assets.arrow_right} alt="" />
                        <img className='w-9 p-2  hover:bg-zinc-900 transition duration-300 ease-in-out  ' src={assets.loop_icon} alt="" />
                       
                    </div>
                    <div className='flex gap-3 items-center text-white '>
                        <p>1:03</p>
                        <p className='min-w-[500px] bg-slate-50 h-2 rounded'>
                           
                        </p>
                        <p>3:03</p>
                    </div>
                </div>


                <div className='bg-transparent flex justify-end w-[30%]  p-3'>
                    <div className=' flex gap-7 items-center '>
                        <img className='w-7' src={assets.plays_icon} alt="" />
                        <img className='w-7' src={assets.queue_icon} alt="" />

                        <img className='w-7' src={assets.speaker_icon} alt="" />
                        <img className='w-7' src={assets.mic_icon} alt="" />

                        <img className='w-7' src={assets.volume_icon} alt="" />
                        <p className='min-w-36 bg-slate-50 h-2 rounded' ></p>
                        <img className='w-7' src={assets.zoom_icon} alt="" />
                    </div>
                </div>
            </div>

        </div>


    ) : null
}

export default MusicBar