import React from "react";
import './cardsPage.css'
import HF  from '../img/HF.jpg'
//import  sidebar
//import   the first components

const cardsPage = (props) => {
  return props.trigger  ? (
    <div className="mainframe">
      <div className="sidebar"></div>
      <div className="intro">
       
      </div>
      <div className="cards">
        <div className="first">
        <h1> All my Designs</h1>
        <button>Upload Design</button>
        </div>
        <div className="cards-in-group">
              <div className="one-card">
                 <img src={HF} alt="" />
                 <p>Facebook Post</p>
                 <button>View</button>
              </div>
              <div className="one-card">
                 <img src={HF} alt="" />
                 <p>Facebook Post</p>
                 <button>View</button>
              </div>
              <div className="one-card">
                 <img src={HF} alt="" />
                 <p>Facebook Post</p>
                 <button>View</button>
              </div>
              <div className="one-card">
                 <img src={HF} alt="" />
                 <p>Facebook Post</p>
                 <button>View</button>
              </div>
              <div className="one-card">
                 <img src={HF} alt="" />
                 <p>Facebook Post</p>
                 <button>View</button>
              </div>
              <div className="one-card">
                 <img src={HF} alt="" />
                 <p>Facebook Post</p>
                 <button>View</button>
              </div>
              <div className="one-card">
                 <img src={HF} alt="" />
                 <p>Facebook Post</p>
                 <button>View</button>
              </div>
                
        </div>

      </div>
    </div>
  ) :("");
};

export default cardsPage;
