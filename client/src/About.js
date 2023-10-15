import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const About = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ mt: 1, textAlign: 'center' }}>
        <Typography variant='h1'>
          About
        </Typography>
        <Typography variant='body1'
          sx={{ fontSize: '2em', color: 'darkgrey' }}>
          Welcome to The Open Research Shop
        </Typography>
        <Typography variant='body1'>
          Empowering academic publishing through blockchain innovation!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h2'>
          Overview
        </Typography>
        <Typography variant='body1'>
          At The Open Research Shop, we are on a mission to revolutionise the academic publishing landscape. We leverage the power of blockchain technology and Non-Fungible Tokens (NFTs) to democratise access to academic research, making it more accessible, transparent, and equitable for all stakeholders.
        </Typography>
        <Typography variant='body1'>
          Our platform introduces a groundbreaking decentralised publishing system, representing research projects as NFTs. This unique approach allows researchers to fund, publish, and monetise their work while providing a new avenue for funding and wider dissemination of their research. Academic institutions benefit from cost-effective support for research activities, enhancing their reputation and academic standing.
        </Typography>
        <Typography variant='body1'>
          We are passionate about transparency and fairness, and our decentralised peer review process incentivises reviewers through token mining. This encourages active participation, rewards expertise, and ensures a rigorous and efficient review process.
        </Typography>
        <Typography variant='body1'>
          Our vision is to create a thriving ecosystem where researchers, academic institutions, and investors come together to foster innovation, advance knowledge, and shape the future of academic publishing. Join us in this exciting journey as we build a more collaborative, accessible, and impactful world of academic research.
        </Typography>
        <Typography variant='body1'>
          Key Features:
          <ul>
            <li>Transparent and incentivised peer review process</li>
            <li>Decentralised publishing system using NFTs</li>
            <li>Innovative funding opportunities for researchers</li>
            <li>Cost-effective support for academic institutions</li>
            <li>New investment possibilities for the academic community</li>
          </ul>
        </Typography>
        <Typography variant='body1'>
          <Link to='/contact'>Contact us</Link> today to be part of the academic publishing revolution with The Open Research Shop!
        </Typography>
      </Grid>
    </Grid >
  )
}