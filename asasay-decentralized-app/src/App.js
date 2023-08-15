import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from './components/LoginPage.js';
import SignupForm from './components/SignupForm';
import Marketplace from './components/Marketplace'
import { ConfigProvider } from 'antd';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";  
import NewAsset from './components/NewAsset';


function App() {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ConfigProvider prefixCls="your-app" primaryColor="#79C750">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Marketplace/>}/>
    <Route path="/new-asset" element={<NewAsset/>}/>

      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/signup" element={<SignupForm/>}>

        {/* <Route index element={<Home />} /> */}
        {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  </ConfigProvider>
  );
}

export default App;
