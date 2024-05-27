import React from 'react'
import logoNoText from 'public/logo-no-text-100.png'
import { Box, Typography } from '@mui/material'

export const Copyright = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <img src={logoNoText} alt="Open Research Shop Logo" style={{ marginBottom: '1em', height: '100px', borderRadius: '50px' }} />
      <Typography variant="body2">
        © 2024 The Open Research Shop. All Rights Reserved.
      </Typography>
    </Box>
  )
}
