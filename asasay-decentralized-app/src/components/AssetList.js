import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Card, List, Space, Icon } from 'antd';
import Link from 'antd/es/typography/Link';
const data = Array.from({
  length: 4,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  cover:''
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
function generateRandomValueInMillions() {
  // Generate a random value between 0 and 1
  const randomFraction = Math.random();

  // Define your desired range (e.g., from 1 million to 10 million)
  const minValue = 1_000_000; // 1 million
  const maxValue = 10_000_000; // 10 million

  // Calculate a random value within the specified range
  const randomValue = Math.round(randomFraction * (maxValue - minValue) + minValue);

  return randomValue;
}

function AssetList(){
    console.log('dd')
    var arrHouseImage=['https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
'https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80']
  var arrHouseDesc=['A cozy retreat with two bedrooms, two baths, and a spacious drawing and dining area for your family\'s comfort',
'Experience luxury living in our three-bedroom villa, complete with three baths, and a grand drawing and dining space for elegant gatherings.',
'Perfect for a couples getaway, our one-bedroom villa offers a serene escape with a private bath and an intimate drawing and dining area',
'Gather with friends and family in style in our four-bedroom villa, featuring four baths and an expansive drawing and dining area for your special occasions.']
var i=0;  

data.map((obj) => (
    obj.description=arrHouseDesc[i],
    obj.cover=arrHouseImage[i++],
    obj.title='PKR '+generateRandomValueInMillions()))
    return(
    <List
    grid={{ gutter: 16, column: 4 }}
    size="large"
    style={{backgroundColor:"#ffff",
          margin:"20px"}}
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize:20,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
      >
        <Card
         style={{ }}
         cover={
         <img alt="example" src={item.cover} />}
        >
        <Card.Meta
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        </Card>
      </List.Item>
    )}
  />
  )
}
export default AssetList;