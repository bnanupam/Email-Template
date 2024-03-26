import logoImg from "./assets/logo.png";
import heroBanner from "./assets/banner.png";
import Scrum from "./assets/logo1.png";
import tracBi from "./assets/img";
import chatGPT from "./assets/logo3.png";
import './App.css'
function App() {

  return (
    <>
      <div className="main">
        <div className="headpart">
          <div className="name-logo">
            <div className="name"><h1>Dear Employee,</h1></div>
            <div className="logo">
              <img src={logoImg} alt="logo" />
            </div>
          </div>
        </div>
        <div className="herobanner">
          <div className="banner">
            <img src={heroBanner} alt="hero" />
          </div>
        </div>
        <div className="welcomenote">
          <h3> We are delighted to extend a warm welcome to you as the newest member of the Insignia family.<br></br>
            As we eagerly anticipate your arrival, our team is looking forward to the collaboration, insights, and vitality that you are set to contribute
            </h3>
        </div>
        <div className="middlecontant">
          <div className="paragraph">
            <div>
              <h2>Company Email Access:</h2>
              <p>
                Begin by accessing your new Zoho Mail account with the credentials provided. You can log in here: Zoho Mail Logi
              </p>
            </div>

            <h2>in Virtual Office Access:</h2>
            <p>
              Begin by visiting the virtual office spaces for
              Insignia Solutions:
              Creatives Abode:
            </p>
            <h2>Zoom Configuration:</h2>
            <p>Please download Zoom Client and sign in using your company email. We also recommend setting up an official Gmail account to sync with your Zoom calendar for seamless scheduling.</p>
            <h2>
              Signing into Platforms</h2>
            <p>You'll receive invitations to key platforms via your company email. Kindly accept these and log in at the following:</p>
          </div>
          <div className="img-para">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="para">
              <p>

              </p>
            </div>
          </div>
        </div>
        <div className="loginImg">
          <div className="scrum">
            <img src={Scrum} alt="log in" />
          </div>
          <div className="tracBi">
            <img src={tracBi} alt="daily updte" />
            <div className="chatgpt">
              <img src={chatGPT} alt="chat" />
            </div>
          </div>
        </div>
      </div>


    </>


  )
}
export default App;
