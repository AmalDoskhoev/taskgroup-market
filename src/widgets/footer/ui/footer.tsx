import { Layout } from 'antd';

import styles from './footer.module.scss';

const { Footer: AntFooter } = Layout;

export const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }} className={styles.footer}>
      Taskgroup Market ©2023 Created by Amal
    </AntFooter>
  );
};
