import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'
import { Box } from '@mui/material'


const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: '#0000'}}>
        Navbar
        <Route path="/"  element={<Feed/>}/>
      </Box>
    </BrowserRouter>
  )
}

export default App