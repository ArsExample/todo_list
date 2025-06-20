import React, { useState } from 'react';
import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import WReg from './WReg';
const RegButton = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = index => {
    console.log('Start loading:', index);
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
  };
  return (
    <Flex gap="small" vertical>
      <Flex gap="small" wrap>
          
      </Flex>
    </Flex>
  );
};
export default RegButton;