import React from 'react'
import './second.css'

function Second(props) {   

  
    return props.trigger ? (
      <div className="mainframe">
        <div className="up">
          <h1>Schedule Post</h1>
          
  
          <div className="forms">
            <form action="" className="form1">
              <div className="entry">
                <input type="text" name="title" placeholder="Post Title *" />
             
                
              </div>
              <div className="entry">
                <input
                  type="text"
                  name="title"
                  placeholder="Hashtag *"
                />
              </div>
              <div className="entry">
                <div className="upload">
                  <input type="text" name="title" placeholder="Upload Design Poster and Paste Link" />
                  <button className="btn-browse">Browse Image</button>
                </div>
              </div>
            
            </form>
            <form className="form2" action="">
              <div className="entry">
                <input type="text" name="title" placeholder="Caption *" />
              </div>
              <div className="entry">
                <input
                className='specialinput'
                  type="text"
                  name="title"
                  placeholder="Schedule Post Date *"
                />
              </div>
              <div className="entry">
                <input type="text" name="title" placeholder="Schedule Post Time *" className='specialinput'/>
              </div>
              
              <div className="bus">
                <button className="generateNow">Save</button>
                <button className="forLater"> Publish Now</button>
                <button className="delete">Delete</button>
              </div>
            </form>
          </div>
        </div>
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            Close
          </button>
          {props.children}
        </div>
      </div>
    ) : (
      ""
    );
  };
  
  export default Second;
  