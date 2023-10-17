import React from 'react'
import { Grid, Typography } from '@mui/material'
import './App.css'

export const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ mt: 1, textAlign: 'center' }}>
        <img 
          src='./logo.png'
          alt='logo'
          style={{ 
            height: '20em',
            borderRadius: '10px',
          }} />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant='h1'>
          The Open Research Shop
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant='h2'>
          Coming soon!
        </Typography>
      </Grid>
    </Grid>
  )
}
