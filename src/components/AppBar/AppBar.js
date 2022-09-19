import { Outlet, NavLink } from 'react-router-dom';
import { Header, HLink, H, Img, CartImg } from './AppBar.styled';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

import boy from '../../images/boy.png';
import cart from '../../images/cart.png';

const AppBar = () => {
  const products = useSelector(state => state.Cart.products);
  const allCount = products
    .map(item => item.qty)
    .reduce((acc, i) => acc + i, 0);
  return (
    <Container maxWidth="xl">
      <Header>
        <NavLink to="/delivery/home">
          <Img src={boy} alt="boy on bike" />
        </NavLink>
        <H>Delivery</H>
        <HLink to="/delivery/cart">
          Cart
          <CartImg src={cart} alt="cart" width="25" />
          {allCount !== 0 && <p>{allCount}</p>}
        </HLink>
        {/* </Div> */}
      </Header>
      <Outlet />
    </Container>
  );
};

export default AppBar;
