import YourAssetList from "./YourAssetList"
import React, { useState } from 'react';
import {Layout,Space, Menu} from "antd";
import TopNav from "./TopNav"
import NavAsset from "./NavAsset"
import CustomMenu from "./CustomMenu";
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };
  const { Header } = Layout;
 
function YourAsset(){ 
    return(
    <Space
    direction="Horizontal"
    style={{
        width: '100%',
    }}
    size={[0, 48]}
    >
    <Layout>
    <header>
      <TopNav/>
      <NavAsset/>
    </header>
    <CustomMenu/>
    <YourAssetList/>
    </Layout>
    </Space>
);
}
export default YourAsset;