import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import icon from '../../../../assets/Absolut.jpg'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import { logout } from "../../redux/slices/auth"

import './Profile_Icon.css'

const Profile_Icon = () => {
  const dispatch = useDispatch(); 

  const onClick = ({ key }) => {

    if (key == 1){

    }
    if (key == 2){
      console.log("съебался в страхе")
    }
  };

  const items = [
    {
      label: <Link to="/login">TODOLists</Link>,
      key: '1',
    },
    {
      label: <Link to="/" onClick={e => {
        dispatch(logout());
        window.localStorage.removeItem("token");
      }}>Exit</Link>,
      key: '2',
    }
  ];

  return(
    <Dropdown className='icon' menu={{ items, onClick }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        <img src={icon} alt="loading..." className="icon_akashi"/>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
  );
  
};

export default Profile_Icon;