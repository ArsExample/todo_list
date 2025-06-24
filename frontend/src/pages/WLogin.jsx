import { Button, Form, Input, Select, Space } from 'antd';
import {useDispatch, useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

import { fetchAuth, selectIsAuth } from "../redux/slices/auth";

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
  // подключаем redux 
  const isAuth = useSelector(selectIsAuth); 
  const dispatch = useDispatch(); 

  const onFinish = async (values) => {
    const data = await dispatch(fetchAuth(values)); // отправляем логин пароль на бэк

    if (!data.payload) {
      alert("Не удалось авторизоваться"); // если бэк сказал что нет пользователя
    }

    if ("token" in data.payload){
      window.localStorage.setItem("token", data.payload.token); // если есть пользователь - добавляем токен в локальное хранилище
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  if (isAuth){  // если зареган - переправляем нав страницу с TODO листами
    return <Navigate to="/tmenu"/>;
  }

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