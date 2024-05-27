import { Box } from '@mui/material';
import { Container } from '@mui/material'
import { Logo } from './Logo';
import { Title } from './Title';
import { Features } from './Features';
import { Team } from './Team';
import { PartnersAwards } from './PartnersAwards';
import { Copyright } from './Copyright';

import './App.css';

export const App = () => {
  return (
    <div className="app">
      <Container id="container" class={"top"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <Box component={"main"}>
          <Logo />
          <Title />
        </Box>
      </Container>

      <Container id="container" class={"secondary"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <Box component={"main"}>
          <Features />
        </Box>
      </Container>

      <Container id="container" class={"tertiary"} maxWidth="lg" sx={{ display: "flex", mt: 1}}>
        <Box component={"main"}>
          <Team />
        </Box>
      </Container>

      <Container id="container" class={"less-padding"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <Box component={"main"} sx={{ my: 5 }}>
          <PartnersAwards />
        </Box>
      </Container>

      
      <Container id="container" class={"secondary"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <Box component={"footer"}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
