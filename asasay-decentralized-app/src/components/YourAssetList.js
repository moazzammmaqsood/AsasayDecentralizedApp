import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Avatar, Card, List, Space, Icon } from 'antd'; 
import {fetchAllAssetDetail,fetchAssetDetailById} from "../contracts/AssetsService"
import Link from 'antd/es/typography/Link';


// const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// web3.eth.defaultAccount = web3.eth.accounts[0];

// const RemixContract = new web3.eth.Contract(
//   ContractABI,
//   "0x69B635941391083de97B5549433f97B017b17176"
// )

// async function getAssets() {
//   // const gas = await RemixContract.methods.getAllAssets("0xf6F166d90bB358769170d3202E4437dE0a0C1f27").estimateGas();
//   const result = await RemixContract.methods
//     .getAllAssets('0xD7B7Adb7ba2362AD62AE57625Fba69c9EAA798ee').call();

//     // .send({ from: "0x34C2458A53772Be166A7c0E02da9828f158140d0", gas })
    
//   return result
// };


// const data = Array.from({
//   length: 4,
// }).map((_, i) => ({
//   href: 'https://ant.design',
//   title: `ant design part ${i}`,
//   avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
//   description:'',
//   content:'',
//   cover:'',
// }));
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
function YourAssetList({menu}){
  const[list,setList]=useState([])
  const[data,setdata]=useState([])
  var assetId ='1';

     useEffect(()=>{    
      var address=localStorage.getItem("address");
       var  assets=  fetchAllAssetDetail(address);

       console.log("assets",assets)
     assets.then((e)=>{
      console.log("eee-->",e);
      var newList=[]
      e.forEach(element => {
        console.log('testtt',element.assetType);
        if(menu==='all' && element.assetType!==''){
          console.log('all');

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
         else if(element.assetType!=='' && element.assetType === menu){
          console.log('type--', menu);

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
        console.log("listxxx",newList);
        var newData=[]      
        newList.forEach((e)=>{
        const obj ={  
          href: e.templateUrl,
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

    return(
    <List
    grid={{ gutter: 1, column: 1 }}
    size="large"
    style={{backgroundColor:"#ffff",
          margin:"20px",
        display: "inline",}}
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize:10,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
      >
       <Card>
        <div style={{ width: '100%',display: 'flex' }}>
          {/* Left side: Cover image */}
          <img
            src={item.cover}
            alt="Cover"
            style={{ width: 150, height: 150 }}
          />

          {/* Right side: Title and Description */}
          <div style={{ marginLeft: 16 }}>
            <Card.Meta title={<a href={'/asset-detail/'+item.assetId}>{item.title}</a>} description={item.description} />
          </div>
        </div>
      </Card>
      </List.Item>
    )}
  />
  )
}
export default YourAssetList;