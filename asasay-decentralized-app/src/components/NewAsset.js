import ArrayList from "./AssetList"
import React, { useState } from 'react';
import {Layout,Space, Menu} from "antd";
import BcAsset from '../assets/BcAsset.png';
import houseAsset from '../assets/houseAsset.jpg';
import TopNav from "./TopNav"
import CustomButton from './CustomButton';

 import { PlusOutlined } from '@ant-design/icons';
import { 
    Form,
    Input, 
    Upload,
    Button,
  } from 'antd';    
  const {  Content } = Layout;

function NewAsset(){
    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
return(

    <Space
    direction="vertical"
    style={{
        width: '100%'
    }}
    size={[0, 48]}
    >
    <Layout>
        <header>
      <TopNav/>
    </header>
    <div className="mx-auto d-block">
        <h1 style={{color:"#79C750"}}>New Real Estate</h1>
    </div>
    <Layout>
        <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: "#fff" }}>
        <div style={{ flex: 2, margin: '20px' }}>
    <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
  
           
           <Form.Item label="Owner Name">
                <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item label="CNIC">
                <Input placeholder="Cnic" />
            </Form.Item>
            <Form.Item label="Phone No">
                <Input placeholder="+92XXXXXXXXXX" />
            </Form.Item>
           <Form.Item label="Address">
                <Input placeholder="Address" />
            </Form.Item>
            <Form.Item label="City">
                <Input placeholder="City" />
            </Form.Item>
            <Form.Item label="Size in Marla">
                <Input placeholder="Size" />
            </Form.Item>
            <Form.Item label="Residential/Comercial">
                <Input placeholder="r/c" />
            </Form.Item>
            <Form.Item label="Number of Floors">
                <Input placeholder="0" />
            </Form.Item>
            <Form.Item label="Witness 1 Cnic">
                <Input placeholder="xxxxxx-xxxxxxxx-x" />
            </Form.Item>
            <Form.Item label="Witness 2 Cnic">
                <Input placeholder="xxxxxx-xxxxxxxx-x" />
            </Form.Item>
             <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile} 
                  className="d-flex flex-column align-items-left"  labelCol={{span:0,offset:5}} >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
            </Form.Item>
            <Form.Item   wrapperCol={{
                            offset: 3,
                            span: 10  ,
                        }}>
            <CustomButton/>
            </Form.Item>
    </Form>
    </div>
    <div style={{ flex:1}}>
    <img src={houseAsset} alt="Your Image" style={{ width: '100%', height: '100%' }} />

      </div>
    </Content>
    </Layout>
    </Layout>
    </Space>

);


}

export default NewAsset