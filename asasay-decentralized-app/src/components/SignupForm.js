import React,{ useState } from 'react'; 
import { Outlet, Link } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import BcAsset from '../assets/BcAsset.png';
import asasayLogo from '../assets/asasayLogo.png';
import CustomButton from './CustomButton';
import axios from 'axios';
import { ReactSession } from 'react-client-session';


const onFinish = (values) => {
    console.log('Success:', values);
    axios.post("http://localhost:8080/api/v1/public/auth/signup",
    {"cnic":values.cnic,
    "name":values.name,
    "password":values.password,
    "email":values.email,
    "address":values.address})
    .then(function (response) {
        console.log(response);
        window.location.href ="/"
      })
    .catch((error)=>{
        console.log("error",error)
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
function SignupForm(){
    const primaryColor = "#79C750";


    return(<>
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
                        Sign up to Continue
                    </h1>   
                    <Form className='mt-4'
                        name="basic"
                        labelCol={{
                        span: 10,
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
                        label="Enter your Cnic"
                        name="cnic"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your cnic!',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item
                        label="Enter your Name"
                        name="name"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your name!',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        <Form.Item
                        label="Enter your Email"
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
                        label="Enter your Password"
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
                        label="Enter your Blockchain Wallet"
                        name="address"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your Blockchain Wallet!',
                            },
                        ]}
                        >
                        <Input />
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
                        </Form.Item>

                        <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                            <CustomButton/>
                        {/* <Button type="primary" htmlType="submit">
                            Submit
                        </Button> */}
                        </Form.Item>
                    </Form>
    <div >
        <p className="mx-5 my-5">
            Already have an account? <Link to="/login">Sign in</Link>
        </p>
    </div>
    <div>
                  </div>
                  <div className='col-md-6 text-white'>
                </div>
                </div>
           
            </div>
        </div>
    </>
    );
}


export default SignupForm;