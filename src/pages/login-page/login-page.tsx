import React from 'react';

import { LoginForm } from '@/widgets';

import styles from './login-page.module.scss';

export const LoginPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.login}>
        <LoginForm />
      </div>
    </div>
  );
};
