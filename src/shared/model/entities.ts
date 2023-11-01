export interface UserDataEntity {
  id: number;
  name: string;
}

export interface ProductEntity {
  id: number;
  name: string;
  description: string;
  inCart: boolean;
  image: string;
  quantity: number;
  price: number;
}
