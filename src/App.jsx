// import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './Component/Index'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000', color: '#fff'}}>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Feed/>} />
          <Route path="/video/:id" element={<VideoDetail/>} />
          <Route path="/Channel/:id" element={<ChannelDetail/>} />
          <Route path="/Search/:SearchTearm" element={<SearchFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App