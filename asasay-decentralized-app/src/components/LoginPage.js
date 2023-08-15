import React,{ useState , useEffect } from 'react';
import BcAsset from '../assets/BcAsset.png';
import asasayLogo from '../assets/asasayLogo.png';
import { Button, Checkbox, Form, Input } from 'antd';
import CustomButton from './CustomButton';
import { Outlet, Link } from "react-router-dom";

const onFinish = (values) => {
    console.log('Success:', values);
    window.location.href ="/"
    
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  


function LoginForm() {
    const primaryColor = "#79C750";
    return (
        <div className="container-fluid " style={{ minHeight: "100vh" }}>
            <div className="row" style={{ minHeight: "100vh" }}>
                 <div className="rounded col-md-6 p-2"  style={{ backgroundColor: primaryColor }}>
                    <h1 className="p-3"style={{ color: "#ffffff" }}>
                    Experience First Ever Decentralized Asset Management and It’s Marketplace
                    </h1>                
                    <img className="img-fluid mx-auto d-block" src={BcAsset} alt="file"></img>  
                 <div>
                  </div>
                  <div className='col-md-6 text-white'>
                </div>
                </div>
                <div className="rounded col-md-1"></div>
                <div className="rounded col-md-4 p-2">
                <img className="img-fluid mx-auto d-block" style={{width: "65%"}} src={asasayLogo} alt="file"></img>   
                <h1 className="p-3 text-center">
                        Sign in to Continue
                    </h1>               
                <Form className='mt-4'
                        name="basic"
                        labelCol={{
                        span: 8,
                        }}
                        wrapperCol={{
                        span: 16,
                        }}
                        style={{
                        maxWidth: 600,
                        }}
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"  >
                        <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your email!',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>

                        <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                        >
                        <Input.Password />
                        </Form.Item>

                       

                        <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                        <CustomButton/>
                        </Form.Item>
                        <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                        <Checkbox>Remember me</Checkbox>
                        <Link className='mx-4' to="/signup">Forgot Password?</Link>
                        </Form.Item>
                       
                    </Form>
                 <div>
                  </div>
                  <div className='col-md-6 text-white'>
                </div>
                </div>
           
            </div>
        </div>
    );
};

export default LoginForm;