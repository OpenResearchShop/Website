import React from 'react'
import { Box, Typography } from '@mui/material'

export const Title = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography class="title" variant="h1">
        A complete, open-access academic publishing system
      </Typography>
      <Typography class="subtitle" variant="h4">
        Open Research Shop is revolutionising the way research funding, publishing and access are handled, leveraging tokenisation to transform ideas into investable assets.
      </Typography>
    </Box>
  )
}
