import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import '../css/index.css'
const { Option } = Select;
const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 25 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};
const WReg = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <div className="form_auth_block">
        <div className='RegBlock'>
          <Form
          className='reg'
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 1000 }}
          >
          <h1 className='reg_color'>Welcome!</h1>
          <Form.Item name="email" rules={[{ required: true }]}>
              <Input placeholder='E-mail'/>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
              <Input placeholder='Password'/>
          </Form.Item>
          <Form.Item {...tailLayout}>
              <Space>
              <Button type="primary" htmlType="submit">
                  Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                  Reset
              </Button>
              </Space>
          </Form.Item>
          </Form>
        </div>
      </div>
  </>
  );
};
export default WReg;