import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Layout, type MenuProps, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Logotype } from 'ui-kit';

import { selectCartData, useCartStore } from '@/app/stores/cart';
import { routes } from '@/shared';

import styles from './header.module.scss';

const { Title } = Typography;

const { Header: AntHeader } = Layout;

export const Header = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Профиль'
    },
    {
      key: '2',
      label: 'Выйти',
      onClick: () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
          localStorage.removeItem('token');
          navigate(routes.login);
        }
      }
    }
  ];

  const setСartData = useCartStore(selectCartData);
  const navigate = useNavigate();

  const checkProductCountInCart = () => {
    return setСartData.reduce((count, product) => {
      if (product.count) {
        return count + product.count;
      }
      return count;
    }, 0);
  };

  return (
    <AntHeader className={styles.header}>
      <div className={styles.root}>
        <Link to={routes.shop}>
          <Logotype />
        </Link>
        <div className="flex gap-x-2 items-end">
          <Link to={routes.cart} className={styles.action}>
            <div className={styles.cart}>
              <ShoppingCartOutlined />
              <div className={styles.count}>{checkProductCountInCart()}</div>
            </div>
            <Title className={styles.text} level={3}>
              Корзина
            </Title>
          </Link>

          <Dropdown menu={{ items }} trigger={['click']}>
            <div className={styles.action}>
              <UserOutlined />
              <Title className={styles.text} level={3}>
                Профиль
              </Title>
            </div>
          </Dropdown>
        </div>
      </div>
    </AntHeader>
  );
};
