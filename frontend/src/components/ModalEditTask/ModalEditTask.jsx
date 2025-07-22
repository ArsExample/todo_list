import React, { useState } from 'react';
import { createStyles, useTheme } from 'antd-style';
import {
  Button,
  Form,
  Input,
  ConfigProvider,
  Modal,
  Space,
  Popconfirm,
  message,
} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"

import './ModalEditTask.css'

const useStyle = createStyles(({ token }) => ({
  'my-modal-body': {
    background: token.blue1,
    padding: token.paddingSM,
  },
  'my-modal-mask': {
    boxShadow: `inset 0 0 15px #fff`,
  },
  'my-modal-header': {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  'my-modal-footer': {
    color: token.colorPrimary,
  },
  'my-modal-content': {
    border: '1px solid #333',
  },
}));

const ModalEditTask = (props) => {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const { styles } = useStyle();
  const token = useTheme();
  const toggleModal = (idx, target) => {
    setIsModalOpen(p => {
      p[idx] = target;
      return [...p];
    });
  };
  const classNames = {
    body: styles['my-modal-body'],
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    footer: styles['my-modal-footer'],
    content: styles['my-modal-content'],
  };
  const modalStyles = {
    header: {
      borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      boxShadow: 'inset 0 0 10px #999',
      borderRadius: 5,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '0px solid #333',
    },
    content: {
      boxShadow: '0 0 30px #999', // вот здесь можно яркость свечения менять
    },
  };

    const tasksData = useSelector((state) => state.tasks); // нихуя не работает

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 8,
            },
        },
    };

    const onFinish = (values) => {
      
      console.log(values) //, tasksData.tasks[  ].completed
    };

    const confirm = e => { // вот здесь ебашить вывод значений при подтверждении удаления 
      console.log('удалено')
      console.log() //здесь название листа и таска должно быть (или id?)
      toggleModal(0, false) // закрытие окна
    };
    const cancel = e => {
      console.log('не удалено')
    };

    return (
        <>
        <Space>
            <Button type="primary" onClick={() => toggleModal(0, true)} className='modalbutton'>
              <EditOutlined />
            </Button>
        </Space>
        <Modal
            open={isModalOpen[0]}
            onOk={() => toggleModal(0, false)}
            onCancel={() => toggleModal(0, false)}
            footer=""
            classNames={classNames}
            styles={modalStyles}
        >
            


            <>
                <h1 className='name'>Edit Task</h1>
                <Form
                name="layout-multiple-vertical"
                layout="vertical"
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                className='form'
                >
                  <Form.Item label={<b2 className='input__text'>New task's name</b2>} name="task name" rules={[{ required: true }]}>
                      <Input />
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit" onSubmit={() => toggleModal(0, false)} className='submit'> Submit </Button>
                      
                      <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button danger className='delete'>Delete</Button>
                      </Popconfirm>
                  </Form.Item>
                </Form>
            </>


            
        </Modal>

        </>
  );
};
export default ModalEditTask;