import { Outlet } from 'react-router-dom';
import { Div, HLink, H } from './AppBar.styled';
import { Container } from '@mui/material';

const AppBar = () => {
  return (
    <Container maxWidth="xl">
      <header>
        <H>Delivery</H>
        <Div>
          <HLink to="/delivery/home">Home</HLink>
          <HLink to="/delivery/card">Shop Card</HLink>
        </Div>
      </header>
      <Outlet />
    </Container>
  );
};

export default AppBar;
