import React from 'react'
import './ShoePopup.css'
import demon from '../img/demon.jpg'

 
 function ShoePopup(props){
   return props.trigger ? (

     <div>
        <div className="mainframe">
            <div className="popup">
               <img src={demon} alt="" />
              <div className="buttons">
              <button className='download'> Download</button>
               <button  className='copy'> Copy Link</button>
              </div>
            </div>
        </div>
     </div>
   ) :(
       ""
   );
   }
 
 export default ShoePopup
 