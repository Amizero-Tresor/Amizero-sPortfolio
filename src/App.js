import React from 'react'
import Popup from './components/Popup';
import Second from './components/Second'
import {useState} from 'react'
import ShoePopup from './components/ShoePopup';
// import CardsPage from './components/CardsPage';

const App = () => {
   const [buttonPopup, setButtonPopup]= useState(false);
   const [ShoePopupButton, setShoePopup]= useState(false);
   const [SecondPopup, setSecondPopup]= useState(false);
   

  return (
    <div className='main'>  
      
      <h1>React Popups</h1>
      <br></br>
      <button onClick={()=>{ setButtonPopup(true)}}>Open Popup</button>
      <button onClick={()=>{setShoePopup(true)}}>Open Shoe Popup</button>
      <button onClick={()=>{setSecondPopup(true)}}>Open Second Popup</button>

  
       <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My Popup</h3>
        <p>This is my button trigerred popup</p>
       </Popup> 
       
        <ShoePopup trigger={ShoePopupButton} setTrigger={setShoePopup}>
          <h3>My Button</h3>
          </ShoePopup> 
        <Second trigger={SecondPopup} setTrigger={setSecondPopup}>
          <h3>My second</h3>
        </Second>
          
          {/* <CardsPage/> */}

    </div>
  )
}



export default App;
