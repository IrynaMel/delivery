import axios from 'axios';
const url = 'https://deliveryapponnodejs.herokuapp.com';

const FetchProducts = () => axios.get(`${url}/api/products/`);
const makeOrder = order => axios.post(`${url}/api/products/orders`, order);

const get = {
  FetchProducts,
  makeOrder,
};

export default get;
