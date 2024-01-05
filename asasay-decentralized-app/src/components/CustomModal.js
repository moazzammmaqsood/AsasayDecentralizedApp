import { Button,  Modal, Form, Input ,Typography} from 'antd';
import React, { useState } from 'react';
import {transferAsset, updateValue} from "../contracts/AssetsService"
import startPayment from '../contracts/Metamask'
const { Text, Link } = Typography;

export  function ModalWithForm({prop}) {
  const [visible, setVisible] = useState(true);
  const [form] = Form.useForm();
  
  const showModal = () => {
    setVisible(true)
  }

  const handleSubmit = (values) => {
    var address= localStorage.getItem("address");
    let res =transferAsset(values.address,prop.id,address);
    res.then((e)=>{
      alert("Asset Successfully Transferred");
      window.location.href="/your-asset";

    }).catch((e)=>{
      console.log('err',e);
      alert("Error Occurred while transferring asset");
    })

   }
  
  const handleCancel = () => {
    prop.closeModal(false)
    console.log('id',prop.id);
    form.resetFields()
  };
  
  return (
    <>
      {/* <Button onClick={showModal}>Open Modal</Button> */}
      <Modal visible onOk={form.submit} onCancel={handleCancel}>
        <Form form={form} onFinish={handleSubmit}>
        <Form.Item
                        label="Add Transfer Address"
                        name="address"
                        rules={[
                            {
                            required: true,
                            message: 'Please input destination address',
                            },
                        ]}
                        >
        <Input />
        </Form.Item>
         </Form>
      </Modal>
    </>
  )
}


export function ModalWithBuyForm({prop}) {
  const [visible, setVisible] = useState(true);
  const [form] = Form.useForm();
  
  const showModal = () => {
    setVisible(true)
  }

  const handleSubmit = () => {
    console.log('values',prop.address,prop.amount);
    startPayment(prop.setError,prop.setTxns,prop.value,prop.currentOwner,prop.onSuccessPayment);
    console.log(prop.address);
  }

  const handleCancel = () => {
    prop.closeModal(false)
    console.log('id',prop.id);
    form.resetFields()
  };
  
  return (
    <>
      {/* <Button onClick={showModal}>Open Modal</Button> */}
      <Modal visible onOk={handleSubmit} onCancel={handleCancel}>
      <Text strong>Address: </Text>
      <Text>{prop.currentOwner}</Text>
      <br/>
      <Text strong>value in ETH: </Text>
      <Text>{prop.value}</Text>


        {/* <Form form={form} onFinish={handleSubmit}>
        <Form.Item
                        label="Add Transfer Address"
                        name="address"
                         rules={[
                            {
                            required: true,
                            message: 'Please input destination address',
                            },
                        ]}
                        >
 
        <Input/>
        </Form.Item>
        <Form.Item
                        label="Add Ether Amount"
                        name="amount"
                        value={prop.value}
                        rules={[
                            {
                            required: true,
                            message: 'Please input amount in Ether',
                            },
                        ]}
                        >
        <Input />
        </Form.Item>
         </Form> */}
      </Modal>
    </>
  )
}

export  function ModalWithSellForm({prop}) {
  const [visible, setVisible] = useState(true);
  const [form] = Form.useForm();
  
  const showModal = () => {
    setVisible(true)
  }

  const handleSubmit = (values) => {
    var address= localStorage.getItem("address");
    let res =updateValue(prop.id,values.value,address);
    console.log('ress',res);
    res.then((e)=>{
      alert("Asset Value Updated Successfully");
      prop.onSuccessSell();
    }).catch((e)=>{
      console.log('err',e);
      alert("Error Occurred while updating asset");
    })

   }
  
  const handleCancel = () => {
    prop.closeModal(false)
    console.log('id',prop.id);
    form.resetFields()
  };
  
  return (
    <>
      {/* <Button onClick={showModal}>Open Modal</Button> */}
      <Modal visible onOk={form.submit} onCancel={handleCancel}>
        <Form form={form} onFinish={handleSubmit}>
        <Form.Item
                        label="Enter Value in ETH"
                        name="value"
                        rules={[
                            {
                            required: true,
                            message: 'Please input value in ETH',
                            },
                        ]}
                        >
        <Input />
        </Form.Item>
         </Form>
      </Modal>
    </>
  )
}