import React from 'react'
import 'Desktop9.scoped.css'
import image18 from '../img/image18.png'
import Chart from './Chart'
import {TiUserAdd} from 'react-icons/ti'
import {AiFillHeart} from 'react-icons/ai'

const Desktop9 = ()=> {
  return (
    <div className="main-frame">
    <div className="pop-up">
        <div className="first-one">
            <p>Post Title</p>
            <img src={image18} alt=""></img>
            <p>Caption: We are what we design for the world</p>

        </div>
        <div className="second-one">
            <div className="graph">
                <Chart/>
            </div>
            <div className="cards">
                <div className="one-card">
                    <p>Views</p>
                    <h3>342K </h3>
                    <TiUserAdd/>
                </div>
                <div className="one-card">
                    <p>Views</p>
                    <h3>342K </h3>
                </div>
                <div className="one-card">
                    <p>Views</p>
                    <h3>342K </h3>
                    <AiFillHeart/>
                
            </div>
            </div>
        </div>

    </div>
    </div>
  );
    
}
export default Desktop9 
