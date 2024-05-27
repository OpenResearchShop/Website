import { Container } from '@mui/material'
import { Logo } from './Logo';
import { Title } from './Title';
import { Features } from './Features';
import { Team } from './Team';
import { PartnersAwards } from './PartnersAwards';
import { Contact } from './Contact';
import { Copyright } from './Copyright';

import './App.css';

export const App = () => {
  return (
    <div className="app">
      <Container class={"container top"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <Logo />
        <Title />
      </Container>

      <Container class={"container secondary"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <Features />
      </Container>

      <Container id={"team"} class={"container tertiary"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <Team />
      </Container>

      <Container id="container" class={"container less-padding"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <PartnersAwards />
      </Container>

      <Container id="container" class={"container secondary"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <Contact />
      </Container>

      <Container class={"container tertiary"} maxWidth="lg" sx={{ display: "flex", mt: 1 }}>
        <Copyright />
      </Container>
    </div>
  );
}
