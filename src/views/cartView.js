import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

import Cart from '../components/Cart/Cart';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartView = () => {
  const products = useSelector(state => state.Cart.products);

  return (
    <>
      <ToastContainer />
      {products.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          Your cart is empty <br /> go for a shopping
          <Link to="/delivery/home"> Delivery page</Link>
        </p>
      ) : (
        <Cart
        // onOrder={onOrder}
        // state={state}
        // onChange={onChange}
        // total={total}
        />
      )}
    </>
  );
};

export default CartView;
