import { type Product } from '@/shared/model';

export interface CartStore {
  cartData: Product[];
  loading: boolean;
  setAddCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseProductCount: (productId: number) => void;
  reduceProductCount: (productId: number) => void;
  clearCart: () => void;
  setLoading: (loading: boolean) => void;
}
