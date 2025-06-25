import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import axios from '../axios'
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

import { fetchTlists } from '../redux/slices/tlists';


const TMenu = (props) => {
  // если вылез этот элемент (все сломалось), то либо крашнулся бэк, либо 403 ошибка (пользователь не авторизован), но проверка должна быть в самой странице а не компоненте
  //const [tLists, settLists] = useState([{_id: '1', name: 'ура все нахуй сломалось', creator: '1', createdAt: '2025-06-18T12:52:05.045Z', updatedAt: '2025-06-18T12:52:05.045Z'}])
  //console.log(tLists.t)
  const dispatch = useDispatch();
  const tlistsData = useSelector((state) => state.tlists.items);

  useEffect(() => {
    dispatch(fetchTlists());  // отлавливать 403 ошибку нужно не тут (это надеюсь компонент), а в самой странице по useSelector(selectIsAuth)
  }, [])


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
    label: 'Списки дел',
    icon: <MailOutlined />,
    children: tlistsData?.map(c => {return {label: c.name, key: c._id}}), // или какую нибудь переменную isTlistsLoading и либо 5 андефайндов в массиве либо это
  }
]}
      />
    </div>
  );
};
export default TMenu;