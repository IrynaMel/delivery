import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import Cart from '../components/Cart/Cart';
import { EmptyCart } from 'components/EmptyCart/EmptyCart';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartView = () => {
  const products = useSelector(state => state.Cart.products);

  return (
    <>
      <ToastContainer />
      {products.length === 0 ? <EmptyCart /> : <Cart />}
    </>
  );
};

export default CartView;
