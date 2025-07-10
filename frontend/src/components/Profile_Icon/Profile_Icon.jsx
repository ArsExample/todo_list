import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import icon from '../../../../assets/Absolut.jpg'
import {Link} from "react-router-dom"
import './Profile_Icon.css'

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
    label: <Link to="/">Exit</Link>,
    key: '2',
  }
];

const Profile_Icon = () => (
  <Dropdown className='icon' menu={{ items, onClick }}>
    <a onClick={e => e.preventDefault()}>
      <Space>
        <img src={icon} alt="loading..." className="icon_akashi"/>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default Profile_Icon;