import React from 'react';
import { Logotype } from 'ui-kit';

import { LoginForm } from '@/widgets';

import styles from './login.module.scss';

export const LoginPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.login}>
        <Logotype className="mb-8" />
        <LoginForm />
      </div>
    </div>
  );
};
