import React from 'react'
import { Grid, Typography } from '@mui/material'
import './App.css'

export const Home = () => {
  return (
    <Grid container spacing={3} sx={{ p: 4 }}>
      <Grid item xs={12} sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant='h1' gutterBottom>
          The Open Research Shop
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h2' gutterBottom>
          Coming soon!
        </Typography>
      </Grid>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  )
}
