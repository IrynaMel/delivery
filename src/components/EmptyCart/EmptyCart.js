import { Div, Button } from './EmptyCart.styled';

import cart from '../../images/emptyCart.png';

export const EmptyCart = () => {
  return (
    <Div>
      <img src={cart} alt="empty cart" width="500" />
      <h4>There is no item here</h4>
      <Button to="/delivery/home"> SHOP NOW</Button>
    </Div>
  );
};
