import { Button, Form, Input } from 'antd';
import { IMaskInput } from 'react-imask';
import { useNavigate } from 'react-router-dom';

import { routes } from '@/shared';
import { notification } from '@/shared/libs';

import { type LoginFormFields } from '../model/login-form.types';
import styles from './login-form.module.scss';

export const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = (values: LoginFormFields) => {
    if (values.login !== '+7 (999) 999-99-99' || values.password !== 'admin') {
      notification({
        message: 'Авторизация не удалась',
        type: 'error'
      });
    }
    console.log('Success:', values);
    navigate(routes.shop);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);

    notification({
      message: 'Авторизация не удалась',
      type: 'error'
    });
  };

  return (
    <Form
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
        rules={[{ required: true, message: 'Обязательное поле.', min: 18 }]}
      >
        <IMaskInput
          className={styles.input}
          mask={'+7 (900) 000-00-00'}
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
