import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import React from 'react';

import {
  selectIncreaseProductCount,
  selectReduceProductCount,
  selectRemoveFromCart,
  useCartStore
} from '@/app/stores/cart';
import { notification } from '@/shared/libs';

import styles from './cart-card.module.scss';

const { Title, Paragraph } = Typography;

interface Props {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  count: number;
}

export const CartCard: React.FC<Props> = ({
  id,
  name,
  description,
  price,
  image,
  count
}) => {
  const setRemoveFromCart = useCartStore(selectRemoveFromCart);

  const setIncreaseProductCount = useCartStore(selectIncreaseProductCount);
  const setReduceProductCount = useCartStore(selectReduceProductCount);

  return (
    <Card key={id} hoverable>
      <div className={styles.cardContent}>
        <div className="flex">
          <img src={image} alt={name} className={styles.cardImage} />
          <div className={styles.cardInfo}>
            <Title className="mb-0" level={4}>
              {name}
            </Title>
            <Paragraph className={styles.description}>{description}</Paragraph>
            <div className={styles.counter}>
              <MinusOutlined
                className={styles.counterIcon}
                onClick={() => {
                  setReduceProductCount(id);
                }}
              />
              <span>{count}</span>
              <PlusOutlined
                className={styles.counterIcon}
                onClick={() => {
                  setIncreaseProductCount(id);
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.cardInfo}>
          <DeleteOutlined
            className={styles.deleteIcon}
            onClick={() => {
              setRemoveFromCart(id);
              notification({
                message: 'Товар удален',
                type: 'warning'
              });
            }}
          />
          <Title className="mb-0" level={5}>
            {price} ₽
          </Title>
        </div>
      </div>
    </Card>
  );
};
