import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too short')
    .max(90, 'Too long')
    .required('This field is required'),
  email: Yup.string().email().required('This field is required'),
  phone: Yup.number()
    .min(6, 'Too short')
    // .max(11, 'Too long')
    .required('This field is required'),
  address: Yup.string()
    .min(10, 'Too short')
    .max(90, 'Too long')
    .required('This field is required'),
});

export const initialValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
};
