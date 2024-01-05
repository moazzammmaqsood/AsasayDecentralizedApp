import YourAssetList from "./YourAssetList"
import React, { useState } from 'react';
import {Layout,Space, Menu} from "antd";
import TopNav from "./TopNav"
import NavAsset from "./NavAsset"
import CustomMenu from "./CustomMenu";
import { Content } from "antd/es/layout/layout";

  const { Header } = Layout;
 
function YourAsset(){ 

  
  const[menu,setMenu]=useState("all");
  console.log('menu',menu);
    return(
    <Space
    direction="Horizontal"
    style={{
        width: '100%',
        display: 'block'
    }}
    size={[0, 48]}
    >
    <Layout>
    <header>
      <TopNav/>
      <NavAsset/>
    </header>
    <CustomMenu onSelectionUpdate={setMenu}/>
    <YourAssetList menu={menu}/>
    </Layout>
    </Space>
);
}
export default YourAsset;