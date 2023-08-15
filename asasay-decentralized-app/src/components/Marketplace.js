import ArrayList from "./AssetList"
import React, { useState } from 'react';
import {Layout,Space, Menu} from "antd";
import BcAsset from '../assets/BcAsset.png';
import asasayLogo from '../assets/asasayLogo.png';
import TopNav from "./TopNav"
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
 
function Marketplace(){ 
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
    <CustomMenu/>
    <ArrayList/>
    </Layout>
    </Space>
);
}
export default Marketplace;