import ArrayList from "./AssetList"
import React, { useState } from 'react';
import {Layout,Space, Menu} from "antd";
import BcAsset from '../assets/BcAsset.png';
import carAsset from '../assets/carAsset.jpg';
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

function Profile(){
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
        <h1 style={{color:"#79C750"}}>Your Profile</h1>
    </div>
    <Layout>
        <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: "#fff" }}>
        <div style={{ flex: 2, margin: '10px' }}>
    <h5 style={{display:"inline"}}>Name:</h5>
    <p style={{display:"inline",marginLeft:"10px"}}>Name</p>
    <br ></br>

    <h5 style={{display:"inline"}}>Name:</h5>
    <p style={{display:"inline",marginLeft:"10px"}}>Name</p>

    </div>
    <div style={{ flex:1}}>
    <img src={carAsset} alt="Your Image" style={{ width: '100%', height: '100%' }} />

      </div>
    </Content>
    </Layout>
    </Layout>
    </Space>

);


}

export default Profile