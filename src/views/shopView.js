import { useState } from 'react';
import { useGetProductsQuery } from '../redux/products/productsSlice';
// import { useDispatch, useSelector } from 'react-redux';
import Products from '../components/Products/Products';
import Shops from '../components/Shops/Shops';
import RiseLoader from 'react-spinners/RiseLoader';

const override = {
  display: 'block',
  margin: '140px auto 600px auto',
  borderColor: 'red',
};

const ShopView = () => {
  const [filter, setFilter] = useState('');

  const { data, isLoading } = useGetProductsQuery();

  const products = data?.data.result;

  const uArray = array => {
    var out = [];
    for (var i = 0, len = array.length; i < len; i++)
      if (out.indexOf(array[i]) === -1) out.push(array[i]);
    return out;
  };

  const allShops = products?.map(item => item.shop);
  let shops = [];
  if (products) {
    shops = uArray(allShops);
  }

  const filteredProducts = products?.filter(item => item.shop === filter);

  return (
    <div style={{ display: 'flex' }}>
      <Shops onShop={setFilter} shops={shops} />
      {isLoading && <RiseLoader cssOverride={override} size={50} radius={20} />}
      {data &&
        (filter ? (
          <Products products={filteredProducts} />
        ) : (
          <Products products={products} />
        ))}
    </div>
  );
};

export default ShopView;
