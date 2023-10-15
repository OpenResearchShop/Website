

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import { Home } from './Home'
import { About } from './About'
import { Team } from './Team'
import { Navigation } from './Navigation'
import { Contact } from './Contact'

export const Main = () => {
  return (
    <Box
      component={"main"}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Navigation />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Box>
  )
}
