import React from 'react'
import { Grid, Typography } from '@mui/material'

export const Team = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ mt: 1, textAlign: 'center' }}>
        <Typography variant='h1'>
          Team
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <img
          src={'./ben.jpg'}
          alt={'Ben Pinder'}
          style={{
            borderRadius: '10px',
            marginBottom: '1em',
            width: '100%',
          }} />
        <Typography variant='h4'>
          Ben Pinder
          <Typography variant='caption' sx={{ pl: 1 }}>
            BA, PGCert, MSc
          </Typography>
        </Typography>
        <Typography variant='h5'>
          Founder
        </Typography>
        <Typography variant='h6'>
          Managing Director
        </Typography>
        <Typography variant='body1'>
          Ben is a visionary entrepreneur with a passion for transforming the academic
          publishing landscape. As founder of the Open Research Shop, he leads a
          groundbreaking initiative to democratise research dissemination through
          blockchain and NFT technology. With a background in technology and a
          relentless dedication to innovation, he is driving a paradigm shift in the
          world of academia.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <img
          src={'./chay.jpg'}
          alt={'Chay Brooks'}
          style={{
            borderRadius: '10px',
            marginBottom: '1em',
            width: '100%',
          }} />
        <Typography variant='h4'>
          Chay Brooks
          <Typography variant='caption' sx={{ pl: 1 }}>
            BA, MA, PhD
          </Typography>
        </Typography>
        <Typography variant='h5'>
          Co-Founder
        </Typography>
        <Typography variant='h6'>
          Subject Matter Expert
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <img
          src={'./drew.jpg'}
          alt={'Drew Morgan'}
          style={{
            borderRadius: '10px',
            marginBottom: '1em',
            width: '100%',
          }} />
        <Typography variant='h4'>
          Drew Morgan
          <Typography variant='caption' sx={{ pl: 1 }}>
            BSc, PGCE
          </Typography>
        </Typography>
        <Typography variant='h5'>
          Co-Founder
        </Typography>
        <Typography variant='h6'>
          Technical Lead
        </Typography>
        <Typography variant='body1'>
          Drew is an experienced developer who has spent his entire life building things.
          He has a love of software and is excited to be working on a project that
          will help make the world a better place. He is a passionate educator and
          mentor who is dedicated to sharing knowledge and helping others learn.
        </Typography>
      </Grid>
    </Grid>
  )
}