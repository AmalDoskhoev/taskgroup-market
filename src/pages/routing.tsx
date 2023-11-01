import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '@/shared';

import { CartPage, LoginPage, ShopPage } from '.';

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={routes.login} />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.shop} element={<ShopPage />} />
      <Route path={routes.cart} element={<CartPage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
