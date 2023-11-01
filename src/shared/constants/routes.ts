export enum RoutesMap {
  Auth = 'auth',
  Login = 'login',
  Shop = 'shop',
  Cart = 'cart'
}

export const routes = {
  // Аутентификация
  login: `/${RoutesMap.Auth}/${RoutesMap.Login}`,

  // Магазин
  shop: `/${RoutesMap.Shop}`,

  // Корзина
  cart: `/${RoutesMap.Cart}`
};
