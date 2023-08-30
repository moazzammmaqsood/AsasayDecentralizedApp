import {Menu} from "antd";
import asasayLogo from '../assets/asasayLogo.png';
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined  } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const items = [
    {
      key: 'asasay',
      icon: <Link to="/"><img src={asasayLogo} alt="file"  style={{ width: 160 }}/></Link>,
    },
    {
      label:  <Link to="/profile">Profile</Link>,
      key: 'profile',
      icon: <UserOutlined />,
      style:{float: 'right'},
    }, 
    {
      label: 'Marketplace',
      key: 'marketplace',
      icon: <Link to="/"><AppstoreOutlined /></Link>,
      style:{float: 'right'},
    }, 
    {
        label: (
          <Link to="/your-asset">
            Your Assets
          </Link>
        ),
        key: 'alipay',
        style:{float: 'right'},
      },
    ];

function TopNav(){
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    return(
        // <Menu style={{ display: 'block' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <Menu
        style={{ display: 'block' }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            style={{
              // backgroundColor: current === item.key ? '#79C750' : 'transparent', // Change selected item color
              color: current === item.key ? '#79C750' : 'black', // Change text color based on selection
              float: item.style && item.style.float,
            }}
          >
            {item.icon}
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
        )
}
export default TopNav;