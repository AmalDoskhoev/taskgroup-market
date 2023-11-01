import { Layout } from 'antd';
import React from 'react';

import styles from './container.module.scss';

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <Content className={styles.container}>{children}</Content>;
};
