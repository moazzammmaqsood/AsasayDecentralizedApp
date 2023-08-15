import {Menu} from "antd";
import asasayLogo from '../assets/asasayLogo.png';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const items = [
    {
      key: 'asasay',
      icon: <Link to="/new-asset"><img src={asasayLogo} alt="file"  style={{ width: 160 }}/></Link>,
    },
    {
      label: 'Marketplace',
      key: 'marketplace',
      icon: <AppstoreOutlined />,
      style:{float: 'right'},
    }, 
    {
        label: (
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Your Assets
          </a>
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