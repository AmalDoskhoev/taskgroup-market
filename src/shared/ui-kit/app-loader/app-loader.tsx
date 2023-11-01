import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import React from 'react';

import styles from './app-loader.module.scss';

interface Props {
  visible: boolean;
}

export const AppLoader: React.FC<Props> = ({ visible }) => {
  return (
    <div className={clsx(styles.root, visible && styles.visible)}>
      <LoadingOutlined className={styles.icon} />
    </div>
  );
};
