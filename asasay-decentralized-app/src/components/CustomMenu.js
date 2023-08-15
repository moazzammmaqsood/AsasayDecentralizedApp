import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu,Layout } from 'antd';
import CustomCrousel from './CustomCrousel';
import { icons } from 'antd/es/image/PreviewGroup';
const { Header, Footer, Sider, Content } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
  };
const items = [
    {
        key:'all',
        label:'All Categories',
        style:{backgroundColor:"#79C750",color:"#ffffff"},
        icon:<AppstoreOutlined />
        

    },
  getItem('Real Estate', 'sub1', ),
  getItem('Cars', 'sub2', ),
  getItem('Shops', 'sub4',),
  getItem('Others', 'sub4',),

];
const onClick = (e) => {
  console.log('click', e);
};
function CustomMenu(){
    return(
        <Layout hasSider>
        <Sider style={siderStyle}>
        <Menu
         onClick={onClick}
         mode="vertical"
         items={items}
        />
        </Sider>
        <Content>
         <CustomCrousel />
         </Content>
      </Layout>
)};
export default CustomMenu;