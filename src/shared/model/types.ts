export interface Product {
  id: number;
  name: string;
  description: string;
  inCart: boolean;
  image: string;
  quantity: number;
  price: number;
  count?: number;
}
