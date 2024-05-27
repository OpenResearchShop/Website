import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import logoCircle from 'public/logo-circle-dark-bg-ring-60.png'

export const Features = () => {
  return (
    <Box component={"main"} sx={{ textAlign: "center" }}>
      <Typography variant="h3">
        Features
      </Typography>
      <Typography class="subtitle" variant="h4">
        At Open Research Shop, we hold a core belief that every stakeholder involved in the research creation process deserves fair compensation, be it an institution, a funder, a researcher, a reviewer, or any other participant.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ m: 0, p: 0, textAlign: "center" }}>
            <img class="bullet-icon" src={logoCircle} alt="bullet" />
            <Typography variant="h5" class="bullet-title">
              Peer-reviewed
            </Typography>
            <Typography variant="body1">
              Transparent and incentivised peer review process
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ m: 0, p: 0, textAlign: "center" }}>
            <img class="bullet-icon" src={logoCircle} alt="bullet" />
            <Typography variant="h5" class="bullet-title">
              Decentralised
            </Typography>
            <Typography variant="body1">
              Decentralised publishing system using tokenisation
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ m: 0, p: 0, textAlign: "center" }}>
            <img class="bullet-icon" src={logoCircle} alt="bullet" />
            <Typography variant="h5" class="bullet-title">
              Innovative
            </Typography>
            <Typography variant="body1">
              Innovative funding opportunities for researchers
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ m: 0, p: 0, textAlign: "center" }}>
            <img class="bullet-icon" src={logoCircle} alt="bullet" />
            <Typography variant="h5" class="bullet-title">
              Cost-effective
            </Typography>
            <Typography variant="body1">
              Cost-effective support for academic institutions
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ m: 0, p: 0, textAlign: "center" }}>
            <img class="bullet-icon" src={logoCircle} alt="bullet" />
            <Typography variant="h5" class="bullet-title">
              Investable
            </Typography>
            <Typography variant="body1">
              New investment opportunities for the academic community
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ m: 0, p: 0, textAlign: "center" }}>
            <img class="bullet-icon" src={logoCircle} alt="bullet" />
            <Typography variant="h5" class="bullet-title">
              Owned
            </Typography>
            <Typography variant="body1">
              Researchers, funders and institutions own
              the process
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
