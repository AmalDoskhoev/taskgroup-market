import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import clsx from 'clsx';
import React from 'react';
import { IMaskInput } from 'react-imask';
import { useNavigate } from 'react-router-dom';

import { selectSetLoading, useUserStore } from '@/app/stores/auth';
import { routes } from '@/shared';
import { notification } from '@/shared/libs';

import { type LoginFormFields } from '../model/login-form.types';
import styles from './login-form.module.scss';

export const LoginForm = () => {
  const navigate = useNavigate();
  const setLoading = useUserStore(selectSetLoading);
  const [form] = useForm();

  const [error, setError] = React.useState(false);

  const onFinish = (values: LoginFormFields) => {
    if (values.login !== '+7 (999) 999-99-99' || values.password !== 'admin') {
      notification({
        message: 'Авторизация не удалась',
        type: 'error'
      });
      form.setFields([
        { name: 'password', errors: ['Неверный логин или пароль.'] }
      ]);
      return;
    }

    localStorage.setItem('token', 'admin');

    setLoading(true);

    navigate(routes.shop);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    if (errorInfo.errorFields.length === 2) {
      setError(true);
    }

    notification({
      message: 'Авторизация не удалась',
      type: 'error'
    });
  };

  return (
    <Form
      form={form}
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      requiredMark={false}
      autoComplete="off"
      className="max-w-[320px] w-full"
    >
      <Form.Item<LoginFormFields>
        label="ЛОГИН"
        name="login"
        rules={[{ required: true, message: 'Обязательное поле.' }]}
      >
        <IMaskInput
          className={clsx(styles.input, error && styles.error)}
          mask={'+7 (900) 000-00-00'}
          onChange={() => {
            setError(false);
          }}
          radix="."
          unmask={false}
          placeholder="+7__ __-__-__"
        />
      </Form.Item>

      <Form.Item<LoginFormFields>
        label="ПАРОЛЬ"
        name="password"
        rules={[{ required: true, message: 'Обязательное поле.' }]}
      >
        <Input.Password
          className={styles.input}
          placeholder="Введите значение"
        />
      </Form.Item>

      <div>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Войти
          </Button>
        </Form.Item>
        <Button className={styles.link} type="link">
          Регистрация агентства
        </Button>
        <Button className={styles.link} type="link">
          Забыли пароль?
        </Button>
      </div>
    </Form>
  );
};
