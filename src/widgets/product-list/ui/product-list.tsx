import React from 'react';

import { ProductCard } from '@/features/product-card';
import { type ProductEntity } from '@/shared/model';

interface Props {
  products: ProductEntity[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <>
      {products.map(product => (
        <ProductCard
          product={product}
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </>
  );
};
