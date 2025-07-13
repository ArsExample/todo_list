import React from 'react';
import { Tabs } from 'antd';
import WReg from '../../pages/WReg';
import WLogin from '../../pages/WLogin';

const onChange = key => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'Registration',
    children: (<WReg />),
  },
  {
    key: '2',
    label: 'Login',
    children: (<WLogin />),
  },
];
const ButtonRegLog = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default ButtonRegLog;