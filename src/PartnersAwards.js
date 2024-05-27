import React from 'react'
import businessSheffield from 'public/business-sheffield-300x150.png'
import fundedByUkGov from 'public/UK-Gov.png'
import emerge from 'public/Emerge-Logo.jpeg'
import enterprisingBarnsley from 'public/Outlook-tvniknro.png'
import massReach from 'public/mass-reach.png'
import sheffieldTechnologyParks from 'public/Cooper-Project.png'

import { Box, Grid } from '@mui/material'

export const PartnersAwards = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <img src={businessSheffield} alt="Business Sheffield" style={{ height: '100px', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={fundedByUkGov} alt="Funded by UK Government" style={{ height: '100px', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={emerge} alt="Emerge, University of Sheffield" style={{ height: '100px', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={massReach} alt="Mass Reach" style={{ height: '100px', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={enterprisingBarnsley} alt="Enterprising Barnsley" style={{ height: '100px', borderRadius: '10px' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={sheffieldTechnologyParks} alt="Cooper Project, Sheffield Technology Parks" style={{ height: '100px', borderRadius: '10px' }} />
        </Grid>
      </Grid>
    </Box>
  )
}
