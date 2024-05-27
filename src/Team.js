import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import ben from "public/ben.jpg"
import drew from "public/drew.jpg"

export const Team = () => {
  return (
    <Box component={"main"} sx={{ textAlign: "center" }}>
      <Typography variant="h3">
        The Team
      </Typography>
      <Typography class="subtitle extra-gap" variant="h4">
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img
            src={ben}
            alt={"Ben Pinder"}
            style={{
              borderRadius: "10px",
              marginBottom: "1em",
              width: "60%",
            }} />
          <Typography variant={"h5"}>
            Ben Pinder BA, PGCert, MSc
          </Typography>
          <Typography variant="h6" class="role">
            Founder & Chief Executive Officer
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "left" }}>
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
            src={drew}
            alt={"Drew Morgan"}
            style={{
              borderRadius: "10px",
              marginBottom: "1em",
              width: "60%",
            }} />
          <Typography variant={"h5"}>
            Drew Morgan BSc, PGCE
          </Typography>
          <Typography variant="h6" class="role">
            Co-Founder & Chief Technical Officer
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "left" }}>
            Drew is an experienced developer who has spent his entire life building things.
            He has a love of software and is excited to be working on a project that
            will help make the world a better place. He is a passionate educator, mentor,
            and instructor who is dedicated to sharing knowledge and helping others learn.
          </Typography>
        </Grid>
      </Grid>
    </Box >
  )
}