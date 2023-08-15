import React,{ useState } from 'react'; 
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



function LoginForm(props){
    return(
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
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

    );
}
// function LoginsForm(signin) {
//     const primaryColor = "#79C750";

//     const [text,setText]=useState('Create Account');
//     const onFinish = (values) => {
//         console.log('Success:', values);
//     };
//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };
//     function onClicked(){
//         console.log('create account was pressed');
//         if(text==='Create Account'){
//             setText('Login')
//         }else{
//             setText('Create Account')
//         }
    
//     }
//     return (
//         <div className="container-fluid " style={{ minHeight: "100vh" }}>
//             <div className="row" style={{ minHeight: "100vh" }}>
//                  <div className="rounded col-md-6 p-2"  style={{ backgroundColor: primaryColor }}>
//                     <h1 className="p-3"style={{ color: "#ffffff" }}>
//                     Experience First Ever Decentralized Asset Management and It’s Marketplace
//                     </h1>                
//                     <img className="img-fluid mx-auto d-block" src={BcAsset} alt="file"></img>  
//                  <div>
//                   </div>
//                   <div className='col-md-6 text-white'>
//                 </div>
//                 </div>
//                 <div className="rounded col-md-1"></div>
//                 <div className="rounded col-md-4 p-2">
//                 <img className="img-fluid mx-auto d-block" style={{width: "65%"}} src={asasayLogo} alt="file"></img> 
//                    <form className="mt-4">
//                     <h1 className="p-3 text-center">
//                         Sign in to Continue
//                     </h1>                
//                     <div className="form-floating mx-5 my-2">
//                         <input type="email" className="form-control " id="email" placeholder="name@example.com"></input>
//                         <label for="email">Email Address</label>
//                     </div>
//                     <div className="form-floating mx-5 my-2">
//                         <input type="password" className="form-control " id="password" placeholder="password"></input>
//                         <label  for="password">Password</label>
//                     </div>
//                     <div className="text-center my-2">
//                     <button className="btn btn-primary center mx-auto w-75 py-2" type="submit" >Sign in</button>
//                     </div>
//                     </form>
//                  <div>
//                   </div>
//                   <div className='col-md-6 text-white'>
//                 </div>
//                 </div>
           
//             </div>
//         </div>
        // <div className="verticalCard"> 
        //     <div className="description">
        //         <h2 className='heading'>Welcome<br/>to Assets One Address</h2> 
        //         <p className='heading'>First Blockchain Site to manage <br/>and sell your assets</p>
        //         <p className='heading' onClick={onClicked}>{text}</p>
        //     </div>
        //     <div className="loginform">

        //         <Form
        //             name="basic"
        //             labelCol={{
        //                 span: 8,
        //             }}
        //             wrapperCol={{
        //                 span: 16,
        //             }}
        //             style={{
        //                 maxWidth: 600,
        //             }}
        //             initialValues={{
        //                 remember: true,
        //             }}
        //             onFinish={onFinish}
        //             onFinishFailed={onFinishFailed}
        //             autoComplete="off"
        //         >
        //             <Form.Item
        //                 label="Username"
        //                 name="username"
        //                 rules={[
        //                     {
        //                         required: true,
        //                         message: 'Please input your username!',
        //                     },
        //                 ]}
        //             >
        //                 <Input />
        //             </Form.Item>

        //             <Form.Item
        //                 label="Password"
        //                 name="password"
        //                 rules={[
        //                     {
        //                         required: true,
        //                         message: 'Please input your password!',
        //                     },
        //                 ]}
        //             >
        //                 <Input.Password />
        //             </Form.Item>

        //             <Form.Item
        //                 name="remember"
        //                 valuePropName="checked"
        //                 wrapperCol={{
        //                     offset: 8,
        //                     span: 16,
        //                 }}
        //             >
        //                 <Checkbox>Remember me</Checkbox>
        //             </Form.Item>

        //             <Form.Item
        //                 wrapperCol={{
        //                     offset: 8,
        //                     span: 16,
        //                 }}
        //             >
        //                 <Button type="primary" htmlType="submit">
        //                     Submit
        //                 </Button>
        //             </Form.Item>
        //         </Form>
        //     </div>
        // </div>
    // );
// };

export default LoginForm;