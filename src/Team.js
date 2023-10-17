import React from 'react'
import { Grid, Typography } from '@mui/material'

export const Team = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ mt: 1, mb: 2, textAlign: 'center' }}>
        <Typography variant='h1'>
          Team
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={0} md={2}>
          <Grid item xs={12}>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <div sttle={{ textAlign: 'center' }}>
                <img
                  src={'./ben.jpg'}
                  alt={'Ben Pinder'}
                  style={{
                    borderRadius: '10px',
                    marginBottom: '1em',
                    width: '100%',
                  }} />
              </div>
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
            <Grid item xs={12} md={6}>
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
                will help make the world a better place. He is a passionate educator, mentor,
                and instructor who is dedicated to sharing knowledge and helping others learn.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} md={2}>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}