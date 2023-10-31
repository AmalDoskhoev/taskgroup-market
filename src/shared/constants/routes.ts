export enum RoutesMap {
  Auth = 'auth',
  Login = 'login',
  Shop = 'shop'
}

export const routes = {
  // Аутентификация
  login: `/${RoutesMap.Auth}/${RoutesMap.Login}`,

  // Магазин
  shop: `/${RoutesMap.Shop}`
};
