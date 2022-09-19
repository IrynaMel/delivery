import ShopView from 'views/shopView';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import NotFoundView from 'views/NotFoundView';
import CartView from 'views/cartView';
import AppBar from './AppBar/AppBar';

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/delivery" element={<AppBar />}>
          <Route path="home" element={<ShopView />} />
          <Route path="cart" element={<CartView />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  );
}
