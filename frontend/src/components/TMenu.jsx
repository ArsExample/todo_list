import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

const TMenu = (props) => {
  const [tLists, settLists] = useState([{_id: '6852b675273045cfd2a992ea', name: 'first list', creator: '6851fa22ad3cc7bf69c614f8', createdAt: '2025-06-18T12:52:05.045Z', updatedAt: '2025-06-18T12:52:05.045Z'}])

  useEffect(() => {
    axios.get("http://127.0.0.1:4444/testlists").then(res => {
      settLists(res.data)
    })
  }, [])

  console.log(tLists.t)
  const [collapsed, setCollapsed] = useState(false); 
  const toggleCollapsed = () => {
    setCollapsed(collapsed);
  };
  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={[
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: tLists?.map(c => {return {label: c.name, key: c._id}}),
  }
]}
      />
    </div>
  );
};
export default TMenu;