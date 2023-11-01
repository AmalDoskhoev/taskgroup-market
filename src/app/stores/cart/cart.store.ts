import { create } from 'zustand';

import { type Product } from '@/shared/model';

import { type CartStore } from '.';

export const useCartStore = create<CartStore>(set => ({
  cartData: JSON.parse(localStorage.getItem('cartProducts') ?? '[]') ?? [],
  loading: false,

  setAddCart: (product: Product) => {
    set(state => {
      product.count = 1;
      const updatedCartData = [...state.cartData, product];

      localStorage.setItem('cartProducts', JSON.stringify(updatedCartData));

      return {
        ...state,
        cartData: updatedCartData
      };
    });
  },

  removeFromCart: (productId: number) => {
    set(state => {
      const updatedCartData = state.cartData.filter(
        product => product.id !== productId
      );

      localStorage.setItem('cartProducts', JSON.stringify(updatedCartData));

      return {
        ...state,
        cartData: updatedCartData
      };
    });
  },

  increaseProductCount: (productId: number) => {
    set(state => {
      const updatedCartData = state.cartData.map(product => {
        if (product.id === productId && product.count) {
          return {
            ...product,
            count: product.count + 1
          };
        }
        return product;
      });

      localStorage.setItem('cartProducts', JSON.stringify(updatedCartData));

      return {
        ...state,
        cartData: updatedCartData
      };
    });
  },

  reduceProductCount: (productId: number) => {
    set(state => {
      const updatedCartData = state.cartData.map(product => {
        if (product.id === productId && product.count && product.count > 1) {
          return {
            ...product,
            count: product.count - 1
          };
        }
        return product;
      });

      localStorage.setItem('cartProducts', JSON.stringify(updatedCartData));

      return {
        ...state,
        cartData: updatedCartData
      };
    });
  },

  clearCart: () => {
    set(state => ({
      ...state,
      cartData: []
    }));

    localStorage.setItem('cartProducts', JSON.stringify([]));
  },

  setLoading: (loading: boolean) => {
    set(state => ({
      ...state,
      loading
    }));
  }
}));
