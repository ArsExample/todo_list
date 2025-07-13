import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import WReg from '../../pages/WLogin';
import WLogin from '../../pages/WLogin';
import './ModalRegLog.css'
import ButtonRegLog from '../ButtonRegLog/ButtonRegLog';

const ModalRegLog = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick = ({ key }) => {

    if (key == 1){
      
    }
    if (key == 2){
      console.log("съебался в страхе")
    }
  };

  return (
    <>
      <Button onClick={showModal}>
        TODOLists
      </Button>
      <Modal
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ButtonRegLog></ButtonRegLog>

        
      </Modal>
    </>
  );
};

export default ModalRegLog;