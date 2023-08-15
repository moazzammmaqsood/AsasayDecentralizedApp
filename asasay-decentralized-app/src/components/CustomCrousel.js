import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
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
  return (
    <Carousel style={contentStyles}   {...settings} autoplay>
    <div>
      <img className="img-fluid mx-auto d-block" style={{width: "45%"}}  src={adpic}/>
    </div>
    
    <div>
    <img className="img-fluid mx-auto d-block" style={{width: "95%"}}  src={RealEstatecrop}/>
    </div>
    </Carousel>
  );
};
export default CustomCrousel;