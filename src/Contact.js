import { Grid } from '@mui/material'
import React from 'react'

export const Contact = () => {
  return (
    <Grid container spacing={3} sx={{ textAlign: 'center' }}>
      <Grid item xs={12}>
        <iframe
          title="contact-form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHFUdeYDswR6X_wIFTwP0u3YK3gsXFVju6pV_5STWMJfCvew/viewform?embedded=true"
          width="640"
          height="1700"
          frameborder="0"
          marginheight="0"
          marginwidth="0">Loading…</iframe>
      </Grid>
    </Grid>
  )
}