import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React,{ useEffect, useState } from 'react';
import { Avatar, Card, List, Space, Icon } from 'antd';
import Link from 'antd/es/typography/Link';
import {fetchAssetDetailMarketplace} from "../contracts/AssetsService";


function getDescription(data){
  if(data?.assetType === 'Real Estate'){
    return 'Address: '+data?.realEstate?._address +
    ', Floor: '+data?.realEstate?.noOfFloors +
    ', \nSize: '+ data?.realEstate?.size + 
    ', Type: '+ data?.realEstate?.realEstateType  ;

  }else if(data?.assetType === 'Car'){
    return 'Registration No: '+data?.car?.registerationNo +
    ', Model No: '+data?.car?.modelNo +
    ', Company: '+ data?.car?.company + 
    ', Engine No: '+ data?.car?.engineNo  ;

  }


}
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

function AssetList({menu}){
   var i=0;  
const[list,setList]=useState([])
const[data,setdata]=useState([])

   useEffect(()=>{    
     var  assets=  fetchAssetDetailMarketplace();
    assets.then((e)=>{
    var newList=[]
    e.forEach(element => {
      if(menu==='all' && element.assetType!=='' && element.sell){
        var asset ={
          "assetId":element.assetId,
           "assetType":element.assetType,
           "cnic":element.cnic,
           "ownerName":element.currentOwner, 
           "realEstate":element.realEstate,
           "value":element.value,
           "templateUrl":element.templateUrl,
           "car":element.car
         }
         newList.push(asset);
      }
     else if(element.assetType!=='' && element.sell && element.assetType === menu ){
      var asset ={
        "assetId":element.assetId,
         "assetType":element.assetType,
         "cnic":element.cnic,
         "ownerName":element.currentOwner, 
         "realEstate":element.realEstate,
         "value":element.value,
         "templateUrl":element.templateUrl,
         "car":element.car
       }
       newList.push(asset);
      }
      });
      
      setList(newList);
      var newData=[]      
      newList.forEach((e)=>{
      const obj ={  
        href: "/asset-detail/"+e.assetId,
        title: e.value+' ETH',
        assetId: e.assetId,
        // avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
        description: getDescription(e),
        content: e.realEstate._address+'\n'+e.realEstate?.floor,
        cover:e.templateUrl,
      }
      newData.push(obj)
      })
      setdata(newData);
      
});
},[menu]);

// data.map((obj) => (
//     obj.description=arrHouseDesc[i],
//     obj.cover=arrHouseImage[i++],
//     obj.title='PKR '+generateRandomValueInMillions()))
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