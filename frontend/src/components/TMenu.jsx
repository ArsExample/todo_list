import React, { useState } from 'react';
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
  const tlists = props.t
  console.log(props.t)
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
    children: tlists?.map(c => {return {label: c.name, key: c._id}}),
  }
]}
      />
    </div>
  );
};
export default TMenu;