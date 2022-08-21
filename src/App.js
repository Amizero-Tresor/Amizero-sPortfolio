import React from 'react'
import Popup from './components/Popup';
import {useState} from 'react'
import ShoePopup from './components/ShoePopup';
// import CardsPage from './components/CardsPage';

const App = () => {
   const [buttonPopup, setButtonPopup]= useState(false);
   const [ShoePopupButton, setShoePopup]= useState(false);
   

  return (
    <div className='main'>  
      
      <h1>React Popups</h1>
      <br></br>
      <button onClick={()=>{ setButtonPopup(true)}}>Open Popup</button>
      <button onClick={()=>{setShoePopup(true)}}>Open Shoe Popup</button>
  
       <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My Popup</h3>
        <p>This is my button trigerred popup</p>
       </Popup> 
       
        <ShoePopup trigger={ShoePopupButton} setTrigger={setShoePopup}>
          <h3>My Button</h3>
          </ShoePopup> 
          
          {/* <CardsPage/> */}

    </div>
  )
}



export default App;
