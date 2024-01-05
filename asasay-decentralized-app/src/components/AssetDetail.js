import AssetList from "./AssetList"
import React, { useEffect, useState } from 'react';
import {Layout,Space, Menu, Typography, Image,Row,Col} from "antd";
import BcAsset from '../assets/BcAsset.png';
import houseAsset from '../assets/houseAsset.jpg';
import TopNav from "./TopNav"
import CustomButton from './CustomButton';
import {buyAsset, fetchAssetDetailById,sellAsset,transferAsset} from "../contracts/AssetsService"
import { useParams } from 'react-router';
import Modal from "antd/es/modal/Modal";
import { PlusOutlined } from '@ant-design/icons';
import {ModalWithForm,ModalWithBuyForm,ModalWithSellForm} from './CustomModal'
import {startPayment} from '../contracts/Metamask'
import { 
    Form,
    Input, 
    Upload,
    Button,
  } from 'antd';    
import Sider from "antd/es/layout/Sider";
import axios from 'axios'
import ErrorMessage from "../utils/ErrorMessage";

const {  Content } = Layout;
  const { Text, Link } = Typography;
 

  
function AssetDetail(){
  const { id } = useParams();
  const[openModal,setOpenModal]=useState(false);
  const[openBuyModal,setOpenBuyModal]=useState(false);
  const[data,setDatas]=useState({});
  const[addr,setAddr]=useState([]);
  const[owners,setOwners]=useState([]);
  const[map,setMap]=useState({});
  const[sell,setSell]=useState(false); 
  const[isOwner,setIsOwner]=useState(false);
  const[txns,setTxns]=useState(null);
  const[openSellModal,setOpenSellModal]=useState(false);
  const[error,setError]=useState(null);
  var token= localStorage.getItem("token"); 
  var address= localStorage.getItem("address"); 

  function onSuccessPayment(){
    buyAsset(address,id);
    console.log('Payment Success');
    window.location.href ="/your-asset"
  }

  function transferAssets(id){
     setOpenModal(true);
  };
  function onsubmitSell(){
    setOpenSellModal(true);
  }
  function onsubmit(){
     var res= sellAsset(id,false,address);
    res.then((r)=>{
      setSell(false);
    }).catch((e)=>{
      alert("unable to sell on Marketplace");
    })
  }

  function sellSuccess(){
    var res= sellAsset(id,true,address);
    res.then((r)=>{
      setOpenSellModal(false);
      setSell(true);
    }).catch((e)=>{
      alert("unable to sell on Marketplace");
    })

   }
  function onsubmitBuy(){
    setOpenBuyModal(true);
    // let bool =!sell;
    // sellAsset(id,bool);
    // setSell(bool);
  }

  useEffect(()=>{
    var owner =[];
    addr.map((i)=>{
      owner.push(map[i]);
      console.log('i',map[i]);
    })
    setOwners(owner);
       console.log('response owners', owners);

  },[map])
  useEffect(()=>{

    if(addr.length>0){
      const config = {
        headers: { 'Content-Type': 'application/json',
        "Authorization":"Bearer "+token}
        }
        axios.post("/get-user-mapping",{
          "addresses":addr
      },config).then(function (response) {
  
        setMap(response.data);
        }
        ).catch((error)=>{
          console.log(error)
          // alert(error.response?.data?.errorDescriprtion)
      });
    }
  },[addr])
  console.log('txns--->',txns);
  useEffect(()=>{

    const addresses= [];
    var assetResult= fetchAssetDetailById(id);
    assetResult.then((item)=>{
      setDatas(item);
      console.log('type',item.assetType)
      // addresses.push('0x28eDD6Df1d10E4Df26470E19a219d83f07bf7389');
      item.prevOwner.map((i)=>{
        addresses.push(i);
      })
      if(item.currentOwner === address){
        setIsOwner(true);
      }else{
        setIsOwner(false);
      }

      addresses.push(item.currentOwner);
      setAddr(addresses);
      console.log('sss',addresses);
      setSell(item.sell);

     });
    
  },[id]);
  var prop={
    'closeModal':setOpenModal,
    'id':id
  } 
  var buyProp={
    'closeModal':setOpenBuyModal,
    'id':id,
    'setTxns': setTxns,
    'setError': setError,
    'currentOwner': data.currentOwner,
    'value':data.value,
    'onSuccessPayment':onSuccessPayment
  } 

  var sellProp={
    'closeModal':setOpenSellModal,
    'id':id,
    'value':data.value,
    'onSuccessSell':sellSuccess
  }
return(

  <>
    {openModal && <ModalWithForm prop={prop}/>}
    {openBuyModal && <ModalWithBuyForm prop={buyProp}/>}
    {openSellModal && <ModalWithSellForm prop={sellProp}/>}

    <Space
    direction="vertical"
    style={{
        width: '100%'
    }}
    size={[0, 48]}
    >
    <Layout>
        <header>
      <TopNav/>
    </header>
    <div className="mx-auto d-block">
        <h1 style={{color:"#79C750"}}>
          Asset Details
       </h1>
    </div>
    <Layout>
    <Row gutter={16} style={{backgroundColor:"#fff"}}>
          <Col span={8}>
            {/* Content for the first side */}
            <div style={{ backgroundColor: '#fff', padding: '20px' }}>
            <Image
              width={200}
              height={200}
              src={data?.templateUrl}
              fallback="data:image/png;base64,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"
            />
            </div>
          </Col>
          <Col span={8}>
            {/* Content for the second side */}
            <div style={{ backgroundColor: '#fff', padding: '20px' }}>
            <Space direction="vertical">
                <Space direction="vertical" style={{height: "30vh"}}>
                <Text strong> Owners </Text>
                {owners.map((owner)=>{
                 return <li>{owner}</li>
                })}
 
                {/* data.owners.map((item){
                <Text> item.name </Text>
                }) */}
                </Space>
                <Space direction="vertical">
                <Text strong> Details </Text>
                </Space>
                {data.assetType === 'Real Estate' &&
                <> <Space direction="horizontal">
                <Text strong> Owner Name: </Text>
                <Text> {map[data?.currentOwner]}</Text>
                </Space>
                <Space direction="horizontal">
                <Text strong> Address: </Text>
                 <Text> {data?.realEstate?._address} </Text>
                </Space>
                <Space direction="horizontal">
                <Text strong> Size: </Text>
                <Text> {data?.realEstate?.size} </Text>
                </Space>
                <Space direction="horizontal">
                <Text strong> Type: </Text>
                <Text> {data?.realEstate?.realEstateType} </Text>
                </Space>
                <Space direction="horizontal">
                <Text strong> Allowed Floors: </Text>
                <Text> {data?.realEstate?.noOfFloors.toString()}</Text>
                </Space>
                </>     
                }

                {data.assetType === 'Car' &&
                <> <Space direction="horizontal">
                <Text strong> Owner Name: </Text>
                <Text> {map[data?.currentOwner]}</Text>
                </Space>
                <Space direction="horizontal">
                <Text strong> Engine No: </Text>
                <Text> {data?.car?.engineNo} </Text>
                </Space>
                <Space direction="horizontal">
                <Text strong> Model No: </Text>
                 <Text> {data?.car?.modelNo} </Text>
                </Space>
                <Space direction="horizontal">
                <Text strong> Registeration No: </Text>
                <Text> {data?.car?.registerationNo} </Text>
                </Space>
                <Space direction="horizontal">
                <Text strong> Company: </Text>
                <Text> {data?.car?.company} </Text>
                </Space>
                <Space direction="horizontal">
                <Text strong> Wheels: </Text>
                <Text> {data?.car?.wheels.toString()}</Text>
                </Space>
                </>     
                }
                </Space>
            </div>
          </Col>
          <Col span={7} >
          <div style={{ backgroundColor: '#fff', }}>
  
         {isOwner && <Button type="primary" onClick={()=>transferAssets(id) } htmlType="submit" style={{ backgroundColor: "#D1C170" , margin:"20px"}} block>
                            Transfer
                        </Button>}
          {/* <Modal
          title="Which Address to send"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            placeholder="address"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Modal>            */}
         {(isOwner && !sell) && <Button type="primary" onClick={onsubmitSell} htmlType="submit" style={{ backgroundColor: "#79C750" , margin:"20px"}} block>
                            Sell on Marketplace 
                        </Button>}
          {(!isOwner && sell) && <Button type="primary" onClick={onsubmitBuy} htmlType="submit" style={{ backgroundColor: "#79C750" , margin:"20px"}} block>
            Buy Asset
          </Button>}
          <ErrorMessage message={error} />
          {(isOwner && sell)  && <Button type="primary" onClick={onsubmit} htmlType="submit" style={{ backgroundColor: "#71C750" , margin:"20px"}} block>
              Remove from Marketplace 
          </Button>}
            </div>
          </Col>
          <Col></Col>
        </Row>
      {/* <Content style={{backgroundColor:"#ffffff",
    padding:"20px"}}>
      
      </Content>
    <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: "#fff" }}>
         

    </Content> */}
    </Layout>
    </Layout>
    </Space>
    </>
);


}

export default AssetDetail