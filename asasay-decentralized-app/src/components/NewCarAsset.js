import AssetList from "./AssetList"
import React, { useState } from 'react';
import {Layout,Space, Menu} from "antd";
import BcAsset from '../assets/BcAsset.png';
import carAsset from '../assets/carAsset.jpg';
import TopNav from "./TopNav"
import CustomButton from './CustomButton';
import axios from 'axios'
import {createCar} from '../contracts/AssetsService'

 import { PlusOutlined } from '@ant-design/icons';
import { 
    Form,
    Input, 
    Upload,
    Button,
  } from 'antd';    
  const {  Content } = Layout;

function NewCarAsset(){
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [imagesUrl,setImageUrl]=useState('');
  const [progress, setProgress] = useState(0);
  const [spin, setIsSpin]=useState(false);
  const uploadImage = async options => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" ,
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmVlci56ZWhyYTkyQGdtYWlsLmNvbSIsImV4cCI6MTkxODE0NjcwNn0.C6YLpB9XTCIUchxYs1BJdFcmcFc3H1IMVRVcKDW5f7E"},
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    };
    fmData.append("file", file);
    fmData.append("assetId", 2);
    try {
      const res = await axios.post(
        "/file-upload",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
      setImageUrl(res?.data);

    } catch (err) {
      console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };



    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };


      const onFinish=(e)=>{

        e._templateUrl=imagesUrl;
        console.log('url=',e._templateUrl)
        // uploadFunc(e.fileList)
         setIsSpin(true);
         createCar(e).then(()=>{
          setIsSpin(false);
          window.location.href ="/your-asset"
         });
       
        }
      const handleOnChange = ({ file, fileList, event }) => {
        // console.log(file, fileList, event);
        //Using Hooks to update the state to the current filelist
        setDefaultFileList(fileList);
        //filelist - [{uid: "-1",url:'Some url to image'}]
      };
    

return(

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
        <h1 style={{color:"#79C750"}}>New Car</h1>
    </div>
    <Layout>
        <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: "#fff" }}>
        <div style={{ flex: 2, margin: '20px' }}>
    <Form
        onFinish={onFinish}
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >

           <Form.Item label="Registeration Number" name="_registerationNo">
                <Input placeholder="Registeration Number" />
            </Form.Item>
            <Form.Item label="Model No" name="_modelNo">
                <Input placeholder="Model No" />
            </Form.Item>
            <Form.Item label="Company" name="_company">
                <Input placeholder="Company" />
            </Form.Item>
            <Form.Item label="Number of wheels" name="_wheels">
                <Input placeholder="Number of wheels" />
            </Form.Item>
            <Form.Item label="Engine no" name="_engineNo">
                <Input placeholder="0" />
            </Form.Item>
            <Form.Item label="Value in ETH" name="_value">
                <Input placeholder="Value in ETH" />
            </Form.Item>
            <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile} 
                  className="d-flex flex-column align-items-left"  labelCol={{span:0,offset:5}} >
          <Upload
           accept="image/*"
           customRequest={uploadImage}
           onChange={handleOnChange}
           listType="picture-card"
           defaultFileList={defaultFileList}
          action="/upload.do">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
            </Form.Item>
            <Form.Item   wrapperCol={{
                            offset: 3,
                            span: 10  ,
                        }}>
            <CustomButton/>
            </Form.Item>
    </Form>
    </div>
    <div style={{ flex:1}}>
    <img src={carAsset} alt="Your Image" style={{ width: '100%', height: '100%' }} />

      </div>
    </Content>
    </Layout>
    </Layout>
    </Space>

);


}

export default NewCarAsset