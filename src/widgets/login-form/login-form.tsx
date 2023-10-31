import { Button, Form, Input } from 'antd';

const onFinish = (values: FieldType) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

interface FieldType {
  login?: number;
  password?: string;
}

export const LoginForm = () => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      +7
      {/* <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select> */}
    </Form.Item>
  );

  return (
    <Form
      name="basic"
      layout="vertical"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      //   initialValues={{ requiredMarkValue: false }}
      requiredMark={false}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="ЛОГИН"
        name="login"
        rules={[{ required: true, message: 'Обязательное поле.' }]}
      >
        <Input placeholder="+7__ __-__-__" addonBefore={prefixSelector} />
      </Form.Item>

      <Form.Item<FieldType>
        label="ПАРОЛЬ"
        name="password"
        rules={[{ required: true, message: 'Обязательное поле.' }]}
      >
        <Input.Password placeholder="Введите значение" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
