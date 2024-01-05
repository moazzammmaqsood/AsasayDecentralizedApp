import AssetList from "./AssetList"
import React, { useEffect, useState } from 'react';
import {Layout,Space, Menu} from "antd";
import BcAsset from '../assets/BcAsset.png';
import asasayLogo from '../assets/asasayLogo.png';
import TopNav from "./TopNav"
import CustomMenu from "./CustomMenu";
import { ReactSession } from 'react-client-session';

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };
  const { Header } = Layout;
 
function Marketplace(){ 
  const[menu,setMenu]=useState('all');
  console.log('menu',menu);
  var token;

  // function onSelectionUpdate(data){
  //   console.log('onSelectionUpdate',data);
  // }
  useEffect(()=>{
 token= localStorage.getItem("token");  
 if(!token){
  window.location.href ="/login"
}// Returns "Bob"

  console.log("token",token)
  },[token]);
 

    return(
    <Space
    direction="vertical"
    style={{
        width: '100%',
    }}
    size={[0, 48]}
    >
    <Layout>
        <header>
      <TopNav/>
    </header>
    <CustomMenu onSelectionUpdate={setMenu}/>
    <AssetList menu={menu} />
    </Layout>
    </Space>
);
}
export default Marketplace;