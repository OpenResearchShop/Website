import { Grid, Paper, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavLink = (props) => {
  const { linkAddress, label } = props

  const minScreenSize = useMediaQuery('(min-width:900px)')

  return (
    <>
      {
        minScreenSize ? (
          <Grid item xs={2} sx={{ textAlign: 'center' }} >
            <Link to={linkAddress} style={{ textDecoration: 'none' }}>
              <Typography
                variant='body1'
                sx={{
                  mt: 3.1,
                  color: 'rgb(0,74,173)',
                  transform: 'scaleX(1)',
                  transformOrigin: 'center center',
                  transition: 'transform 0.25s ease-out',
                  '&:hover': {
                    color: 'rgb(30,104,203)',
                    transform: 'scale(1.1)',
                    transformOrigin: 'center center',
                    transition: 'transform 0.25s ease-in',
                  },
                  '&:visited': {
                    color: 'rgb(0,74,173)',
                  },
                }}>
                {label}
              </Typography>
            </Link>
          </Grid>
        ) : (
          <Grid item xs={3} sx={{
            paddingTop: '0 !important',
            paddingBottom: '1em !important',
            textAlign: 'center',
          }} >
            <Link to={linkAddress} style={{ textDecoration: 'none' }}>
              <Typography variant='body1'>
                {label}
              </Typography>
            </Link>
          </Grid >
        )
      }
    </>
  )
}

export const Navigation = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        m: 1,
        display: 'flex',
        flexDirection: 'column',
      }} >

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Grid container spacing={3}>
          <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
            <img
              src={'./logo.png'}
              alt={'logo'}
              style={{
                height: '4em',
                borderRadius: '10px',
                margin: '0.2em'
              }} />
          </Grid>
          <NavLink linkAddress='/' label='Home' />
          <NavLink linkAddress='/about' label='About' />
          <NavLink linkAddress='/contact' label='Contact' />
          <NavLink linkAddress='/team' label='Team' />
        </Grid>
      </nav>
    </Paper>
  )
}