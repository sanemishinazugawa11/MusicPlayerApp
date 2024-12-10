import React from 'react'
import DisplayHome from './DisplayHome'
import { Route, Routes } from 'react-router-dom'
import AlbumsPage from './AlbumsPage'

export default function Display() {
  return (
  <>
  <Routes>
    <Route path="/" element={<DisplayHome/>}/>
    <Route path="/album/:id" element={<AlbumsPage/>}/>
  </Routes>
  </>
  )
}
