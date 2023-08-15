import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Card, List, Space, Icon } from 'antd';
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function ArrayList(){
    console.log('dd')
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
         cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Card.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        </Card>
      </List.Item>
    )}
  />
  )
}
export default ArrayList;