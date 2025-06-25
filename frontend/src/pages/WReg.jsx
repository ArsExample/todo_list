import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import {useDispatch, useSelector} from "react-redux"
import {Navigate} from "react-router-dom"

import { fetchRegistration, selectIsAuth } from "../redux/slices/auth";

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

  const isAuth = useSelector(selectIsAuth); // все пояснения в логине посмотри, там аналогично
  const dispatch = useDispatch(); 

  const onFinish = async (values) => {
    // console.log(values);
    const data = await dispatch(fetchRegistration(values));

    if (!data.payload) {
      alert("Не удалось зарегестрироваться");
    }

    if ("token" in data.payload){
      window.localStorage.setItem("token", data.payload.token);
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
          <Form.Item name="username" rules={[{ required: true }]}>
              <Input placeholder='UserName'/>
          </Form.Item>
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


// import { useState, useEffect, React } from 'react'
// import { useForm } from 'react-hook-form'
// import axios from "axios"
// import RegButton from './RegButton'
// import '../css/index.css'

// export default function WReg() {
//     const {register, handleSubmit} = useForm()
//     const onSubmit = (data) => {
//         console.log(data)
//     }

//     return (
//         <div className='RegBlock'>
//             <form className="reg" onSubmit={handleSubmit(onSubmit)}>
//                 <input className='ph' placeholder='UserName' {...register('username')}/>
//                 <input className='ph' placeholder='E-mail' {...register('email')}/>
//                 <input className='ph' placeholder='Password' {...register('password')}/>
//                 <button className='bt' type='sumbit'>Submit</button>
//             </form>
//         </div>
//   )
// }
