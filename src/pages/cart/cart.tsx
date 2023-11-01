import { LeftCircleTwoTone } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import {
  selectCartData,
  selectClearCart,
  useCartStore
} from '@/app/stores/cart';
import { routes } from '@/shared';
import { notification } from '@/shared/libs';
import { MainLayout } from '@/shared/ui-kit';
import { CartList } from '@/widgets/cart-list';

import styles from './cart.module.scss';

const { Title } = Typography;

export const CartPage = () => {
  const setСartData = useCartStore(selectCartData);
  const setClearCart = useCartStore(selectClearCart);

  if (setСartData.length === 0) {
    return (
      <MainLayout>
        <Link to={routes.shop} className={styles.notProduct}>
          <LeftCircleTwoTone className={styles.leftArrow} />
          <Title className={styles.title} level={2}>
            На главную
          </Title>
        </Link>
        <Title className={styles.text} level={2}>
          Корзина пуста
        </Title>
      </MainLayout>
    );
  }

  const checkProductCountInCart = () => {
    return setСartData.reduce((count, product) => {
      if (product.count) {
        return count + product.count;
      }
      return count;
    }, 0);
  };

  const calculateTotalCartAmount = () => {
    return setСartData.reduce((total, product) => {
      if (product.price && product.count) {
        return total + product.price * product.count;
      }
      return total;
    }, 0);
  };

  return (
    <MainLayout>
      <div className={styles.cartTitle}>
        <Title className={clsx(styles.text, styles.notMargin)} level={2}>
          Корзина
        </Title>
        <Title level={5} className={styles.count}>
          {checkProductCountInCart()} товар.
        </Title>
      </div>
      <div className={styles.root}>
        <div className={styles.cartList}>
          <CartList cartData={setСartData} />
        </div>
        <div className={styles.rightBox}>
          <div className={styles.order}>
            <Title className={styles.text} level={2}>
              Оформление
            </Title>
            <Title level={5} className={styles.total}>
              Итого:
            </Title>
            <div className={styles.price}>
              <Title className={styles.priceText} level={5}>
                {checkProductCountInCart()} товар.
              </Title>
              <Title className={styles.priceText} level={5}>
                {calculateTotalCartAmount()} ₽
              </Title>
            </div>
            <Button
              type="primary"
              className={styles.orderBtn}
              onClick={() => {
                setClearCart();
                notification({
                  message: 'Заказ успешно сформирован',
                  type: 'success'
                });
              }}
            >
              Оформить заказ
            </Button>
          </div>
          <Title
            level={5}
            className={styles.clearCart}
            onClick={() => {
              setClearCart();
              notification({
                message: 'Корзина очищена',
                type: 'warning'
              });
            }}
          >
            Очистить корзину
          </Title>
        </div>
      </div>
    </MainLayout>
  );
};
