import React from 'react';

import { CartCard } from '@/features/cart-card';
import { type Product } from '@/shared/model';

interface Props {
  cartData: Product[];
}

export const CartList: React.FC<Props> = ({ cartData }) => {
  return (
    <>
      {cartData.map(cart => (
        <CartCard
          key={cart.id}
          id={cart.id}
          name={cart.name}
          description={cart.description}
          price={cart.price}
          image={cart.image}
          count={cart.count ?? 1}
        />
      ))}
    </>
  );
};
