import { Formik, Form } from 'formik';
import { useState } from 'react';

import {
  Div,
  Label,
  Input,
  Button,
  P,
  Title,
  CheckText,
  Checkbox,
} from './Form.styled';

const ClientForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  total,
  handleChecked,
}) => {
  return (
    <Div>
      <h3>Leave your contact</h3>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input name="name" type="name" onChange={handleChange} />
          {errors.name && touched.name && <P>{errors.name}</P>}
        </Label>
        <Label>
          Email
          <Input name="email" type="email" onChange={handleChange} />
          {errors.email && touched.email && <P>{errors.email}</P>}
        </Label>
        <Label>
          Phone
          <Input name="phone" type="phone" onChange={handleChange} />
          {errors.phone && touched.phone && <P>{errors.phone}</P>}
        </Label>
        <Label>
          Address
          <Input name="address" type="address" onChange={handleChange} />
          {errors.address && touched.address && <P>{errors.address}</P>}
        </Label>
        <Title> Total: {total} UAH</Title>
        <Checkbox>
          <input
            type="checkbox"
            name="checkbox"
            value="checkbox"
            onChange={handleChecked}
          />
          <CheckText>Call me to confirm the order</CheckText>
        </Checkbox>

        <Button type="submit">Submit</Button>
      </Form>
    </Div>
  );
};
export default ClientForm;
