import { Button, Form, Input } from 'antd';
import { IMaskInput } from 'react-imask';

import { type LoginFormFields } from '../model/login-form.types';
import styles from './login-form.module.scss';

const onFinish = (values: LoginFormFields) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export const LoginForm = () => {
  return (
    <Form
      name="basic"
      layout="vertical"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      requiredMark={false}
      autoComplete="off"
      className="max-w-[320px]"
    >
      <Form.Item<LoginFormFields>
        label="ЛОГИН"
        name="login"
        rules={[{ required: true, message: 'Обязательное поле.' }]}
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

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.button}>
          ВОЙТИ
        </Button>
      </Form.Item>
    </Form>
  );
};
