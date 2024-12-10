import React from 'react'
import SideBar from './components/SideBar'
import AddSongs from './components/AddSongs'
import { Route, Routes } from 'react-router-dom'
import ListSongs from './components/ListSongs'
import AddAlbums from './components/AddAlbums'
import ListAlbums from './components/ListAlbums'
import Homepage from './components/Homepage'
const App = () => {
  return (
    <div className='min-h-screen min-w-full flex gap-3 p-2 bg-slate-800'>
      <SideBar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/addsongs" element={<AddSongs />}></Route>
        <Route path="/listsongs" element={<ListSongs />}></Route>
        <Route path="/addalbums" element={<AddAlbums />}></Route>
        <Route path="/listalbums" element={<ListAlbums />}></Route>
      </Routes>
    </div>
  )
}

export default App