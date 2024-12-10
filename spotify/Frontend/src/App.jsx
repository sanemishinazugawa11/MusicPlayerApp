import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import MusicBar from './components/MusicBar'

import Display from './components/Display'
import { PlayerContext } from '../Context/Context'

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className='bg-slate-900 grid grid-cols-4 min-h-[100vh]'>

      {songsData.length > 0?
        (
          <>
            <Sidebar />
            <Display />
            <MusicBar />
          </>
        ) : null
      }


      <audio preload='auto' ref={audioRef} src={track && track.file ? track.file : ""} />



    </div>
  )
}

export default App