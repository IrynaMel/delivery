import Form from '../Form/Form';
import { useCreateOrderMutation } from 'redux/order/orderSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartProducts from 'components/CartProducts/CartProducts';
// import { Div, P, Button } from './Cart.styled';
import { Formik } from 'formik';

import { schema, initialValues } from '../../helpers/validationSchemaForm';

import { toast } from 'react-toastify';

const Cart = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [CreateOrder] = useCreateOrderMutation();

  const handleChecked = () => {
    setCheckbox(!checkbox);
  };
  const products = useSelector(state => state.Cart.products);

  const result = products.map(item => Number(item.price) * Number(item.qty));
  const total = result.reduce((sum, elm) => sum + elm, 0);
  const onOrder = values => {
    // e.preventDefault();
    const order = {
      ...values,
      products,
      total,
    };

    !checkbox
      ? toast('Your order processing')
      : toast('We will call you in a minute');
    CreateOrder(order);
    // get.makeOrder(order);
  };
  // console.log(schema);
  return (
    <div style={{ display: 'flex' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onOrder(values);
          actions.resetForm();
        }}
        validateOnBlur
        validationSchema={schema}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            total={total}
            handleChecked={handleChecked}
          />
        )}
      </Formik>

      <CartProducts />

      {/* <Div> */}

      {/* </Div> */}
    </div>
  );
};

export default Cart;
