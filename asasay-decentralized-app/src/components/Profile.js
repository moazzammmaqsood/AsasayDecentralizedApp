import AssetList from "./AssetList"
import React, { useEffect, useState } from 'react';
import {Layout,Space, Menu} from "antd"; 
import TopNav from "./TopNav"
import CustomButton from './CustomButton';
import axios from 'axios';

 import { PlusOutlined } from '@ant-design/icons';
import { 
    Form,
    Input, 
    Upload,
    Button,
  } from 'antd';    
  const {  Content } = Layout;
  const onFinish=(e)=>{
  }
  axios.defaults.baseURL = 'http://localhost:8080';

function Profile(){
  const[data,setData]=useState({});
  var token= localStorage.getItem("token"); 
  var address= localStorage.getItem("address"); 

  
 useEffect(()=>{
  const config = {
    headers: { "content-type": "multipart/form-data" ,
    "Authorization":"Bearer "+token}}
    axios.get("/api/v1/private/get-user",config).then(function (response) {
      console.log(response); 
      setData(response.data);
       // this.props.history.push("/");
  
    }
    ).catch((error)=>{
      console.log(error)
      alert(error.response?.data?.errorDescriprtion)
  })
  
},[1])

 const onClick=(e)=>{
  localStorage.clear();
  window.location.href ="/login";
  
 }
 


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
        <div style={{ flex: 2, margin: '20px' }}>
     <Form
        onFinish={onFinish}
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
       
           <Form.Item label="Name" name="name">
                <Input placeholder={data.name} value={data.name} />
            </Form.Item> 
            <Form.Item label="CNIC" name="cnic">
                <Input placeholder={data.cnic} value={data.cnic} />
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input placeholder={data.email} value={data.email}/>
            </Form.Item>
            <Form.Item label="Blockchain Address" name="address">
                <Input placeholder={data.address} value={data.address} />
            </Form.Item>
            <Form.Item   wrapperCol={{
                            offset: 3,
                            span: 10  ,
                        }}>
            <Button onClick={onClick} style={{backgroundColor:"#79C750",color:"white"}}>Logout</Button>
            </Form.Item>
    </Form>
    </div>
    <div style={{ flex:1}}>
 
      </div>
    </Content>
    </Layout>
    {/* <Layout>
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
    </Layout> */}
    </Layout>
    </Space>

);


}

export default Profile