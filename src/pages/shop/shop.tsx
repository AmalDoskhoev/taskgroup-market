import type { MenuProps } from 'antd';
import { Input, Menu } from 'antd';
import { MainLayout } from 'ui-kit';

import { mockMenuItems, mockProducts } from '@/shared/constants';
import { ProductList } from '@/widgets/product-list';

import styles from './shop.module.scss';

const { Search } = Input;

export const ShopPage = () => {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
  };

  return (
    <MainLayout>
      <div className={styles.root}>
        <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={mockMenuItems}
        />
        <div className={styles.products}>
          <Search
            className={styles.search}
            placeholder="Поиск по сайту"
            onSearch={value => {
              console.log(value);
            }}
          />
          <div className={styles.cards}>
            <ProductList products={mockProducts} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
