import React, { useEffect, useState } from 'react';
import { Carousel, Radio } from 'antd';
import axios from 'axios'
import adpic from '../assets/adpic.jpg';
import RealEstatecrop from '../assets/Real-Estatecrop.jpg';

const contentStyle = {
    height: '20px',
    color: '#000',
    lineHeight: '80px',
    textAlign: 'center',
  };
   const contentStyles = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#000000',
  backgroundColor: '#ffffff',
};

const settings={
    dotStyle: { backgroundColor: '#000000', borderColor: 'black' }, 
}
function CustomCrousel(){
  var token= localStorage.getItem("token"); 
  const [items,setItems]=useState([]);

  useEffect(()=>{

       const config = {
        headers: { 'Content-Type': 'application/json',
        "Authorization":"Bearer "+token}
        }
        axios.get("/api/v1/private/get-carousel",config).then(function (response) {
          setItems(response.data);
          console.log(items);
        }).catch((error)=>{
          console.log(error)
          // alert(error.response?.data?.errorDescriprtion)
      });
      }
       ,[1])
       var renderedOutput = items.map(item => <div> 
        <img className="img-fluid mx-auto d-block" style={{width: "45%"}}  src={item}/>
         </div>)


  return (
    <Carousel style={contentStyles}   {...settings} autoplay>
      {renderedOutput}
    {/* <div>
      <img className="img-fluid mx-auto d-block" style={{width: "45%"}}  src={adpic}/>
    </div>
    
    <div>
    <img className="img-fluid mx-auto d-block" style={{width: "95%"}}  src={RealEstatecrop}/>
    </div> */}
    </Carousel>
  );
};
export default CustomCrousel;