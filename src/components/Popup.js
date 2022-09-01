import './Popup.scoped.css'
import OIP from '../img/OIP.jpg'
import AD from '../img/AD.jpg'

function Popup(props) {
  return props.trigger ? (
    <div className="mainframe">
      <div className="up">
        <h1>Create a Design</h1>
        

        <div className="forms">
          <form action="" className="form1">
            <div className="entry">
              <input type="text" name="title" placeholder="Post Title *" />
            </div>
            <div className="entry">
              <input
                type="text"
                name="title"
                placeholder="Phone Number(Optional)"
              />
            </div>
            <div className="specialentry">
              <div className="upload">
                <input type="text" name="title" placeholder="Upload Logo *" />
                <button className="btn-browse">Browse Image</button>
              </div>
              <div className="new">
                <p>Preview</p>
                <img src={OIP} alt="" />
              </div>
            </div>
            <div className="specialentry">
              <div className="upload">
                <input type="text" name="title" placeholder="Upload Logo *" />
                <button className="btn-browse">Browse Image</button>
              </div>
              <div className="new">
                <p>Preview</p>
                <img src={AD} alt="" />
              </div>
            </div>
          </form>
          <form className="form2" action="">
            <div className="entry">
              <input type="text" name="title" placeholder="Description *" />
            </div>
            <div className="entry">
              <input
                type="text"
                name="title"
                placeholder="Email Address(optional)"
              />
            </div>
            <div className="entry">
              <input type="text" name="title" placeholder="Website(Optional) *" />
            </div>
            <button className="maincolor">Choose your main color</button>
            <div className="new1">
                <p>Preview</p>
                <img src={OIP} alt="" />
              </div>
            <div className="bus">
              
              
              <button className="generateNow">Generate Design Now</button>
              <button className="forLater"> Save for later</button>
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
}

export default Popup;
