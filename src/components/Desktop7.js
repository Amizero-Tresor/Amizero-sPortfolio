import React from 'react'
import 'desktop7.css'
import ARRENDERLOGO from '../img/ARRENDERLOGO.jpg'
import image18 from '../img/image18.jpg'

const Desktop7 = (props) => {
  return  props.trigger ? (
    
      <div className="mainfull">
    <div className="full">
       <div classNameName="intro">
        <h1>LOGO</h1>
        <img  className="logo" src={ARRENDERLOGO} alt="" />
       </div>
        <h2>Images</h2>
        <div className='images'>
          <img src={image18} alt="" />
          <img src={image18} alt="" />
          <img src={image18} alt="" />
        </div>
        <button>DOWNLOAD</button>
      </div>
   </div>
    
  ) : ("");
}

export default Desktop7
