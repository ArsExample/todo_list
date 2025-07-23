import React, { useState } from 'react';
import { createStyles, useTheme } from 'antd-style';
import {
  Button,
  Form,
  Input,
  ConfigProvider,
  Modal,
  Space,
} from 'antd';
import { useDispatch, useSelector } from "react-redux"
import axios from "../../axios"
import { fetchTlists } from "../../redux/slices/tlists"

import './ModalNewList.css'

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

const ModalNewList = () => {
  const dispatch = useDispatch();

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

    const onFinish = async (values) => {
        await axios.post("/tlists", values);
        dispatch(fetchTlists());
    };

    return (
        <>
        <Space>
            <Button type="primary" onClick={() => toggleModal(0, true)} className='modalbuttonlist'>
            New List
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
                <h1 className='new__name'>Create New List</h1>
                <Form
                name="layout-multiple-vertical"
                layout="vertical"
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
                className='form'
                >
                  <Form.Item label={<b2 className='input__text'>list name</b2>} name="name" rules={[{ required: true }]}>
                      <Input />
                  </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" onClick={() => toggleModal(0, false)}> Submit </Button>
                </Form.Item>
                </Form>
            </>


            
        </Modal>

        </>
  );
};
export default ModalNewList;