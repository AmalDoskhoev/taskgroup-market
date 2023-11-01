import { HeartTwoTone } from '@ant-design/icons';
import { Button, Card, Typography } from 'antd';
import clsx from 'clsx';
import React from 'react';

import {
  selectCartData,
  selectRemoveFromCart,
  selectSetAddCart,
  useCartStore
} from '@/app/stores/cart';
import { notification } from '@/shared/libs';
import { type ProductEntity } from '@/shared/model';

import styles from './product-card.module.scss';

interface Props {
  product: ProductEntity;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const { Meta } = Card;

const { Title } = Typography;

export const ProductCard: React.FC<Props> = ({
  product,
  id,
  name,
  description,
  price,
  image
}) => {
  const setСartData = useCartStore(selectCartData);
  const setAddCart = useCartStore(selectSetAddCart);
  const setRemoveFromCart = useCartStore(selectRemoveFromCart);

  const checkInCart = (productId: number): boolean => {
    return setСartData.some(item => item.id === productId);
  };

  const manageCart = (product: ProductEntity) => {
    if (checkInCart(product.id)) {
      setRemoveFromCart(product.id);
      notification({
        message: 'Товар удален',
        type: 'warning'
      });
    } else {
      setAddCart(product);
      notification({
        message: 'Товар добавлен',
        type: 'info'
      });
    }
  };

  return (
    <Card
      key={id}
      className={styles.card}
      hoverable
      cover={<img alt="example" src={image} />}
    >
      <Meta title={name} description={description} />
      <Title className={styles.text} level={3}>
        Цена: {price} ₽
      </Title>
      <div className={styles.actions}>
        <HeartTwoTone key="Favorites" className={styles.favorites} />
        <Button
          key="add"
          type="primary"
          className={clsx(styles.button, checkInCart(id) && styles.add)}
          onClick={() => {
            manageCart(product);
          }}
        >
          {checkInCart(id) ? 'Убрать из корзины' : 'Добавить в корзину'}
        </Button>
      </div>
    </Card>
  );
};
