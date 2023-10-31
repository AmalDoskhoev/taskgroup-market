import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '@/shared';

import { LoginPage } from '.';

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={routes.login} />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.shop} element={<h1>Вы на глайвной!</h1>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
