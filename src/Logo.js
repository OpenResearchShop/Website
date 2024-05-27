import React from 'react'
import logo from 'public/logo.png'
import { Box } from '@mui/material'

export const Logo = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <img src={logo} alt="Open Research Shop Logo" style={{ height: '200px', borderRadius: '10px' }} />
    </Box>
  )
}
