import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/cartProducts/productsSlice';
import { Ul, Li, Button, Img, Head, P, Price } from './Products.styled';

import cart from '../../images/cart.png';

const Products = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Ul>
        {products.map(({ _id, name, price, shop, image }) => {
          return (
            <Li key={_id}>
              <Head>{name}</Head>

              <P> {shop}</P>
              <Img src={image} alt={name} width="150px" height="50px" />
              <Price>{price} UAH</Price>
              <Button
                onClick={() =>
                  dispatch(addToCart({ _id, name, price, shop, image }))
                }
              >
                Add to Cart
                <img src={cart} alt="cart" width="20" />
              </Button>
            </Li>
          );
        })}
      </Ul>
    </div>
  );
};

export default Products;
