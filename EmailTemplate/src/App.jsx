import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from "./assets/img/insignia-logo.png";
import Banner from "./assets/img/banner2.png";
import socialmediaImg from "./assets/img/social_icon.png";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <div className="banner-section">
          <div className="name-logo">
            <div className="name"><h1>Hi Employee,</h1></div>
            <div className="logo">
              <img src={Logo} alt="logo" />
              </div>
              </div>
              <div className="banner-container">
              <div className="hero-banner">
              <img src={Banner} alt="banner" />
              </div>
              <div className="welcome-note">
              <h1 className='greeting-text'>Greetings for the day!</h1>
            </div>
          </div>
          <div className="paragraph">
            <p>
              We kindly request that you provide the documents listed below,
              which are necessary for us to review and validate your professional profile.
            </p>
          </div>
          <div className="orderlist">
            <ul className="componants">
              <li>Pan card</li>
              <li>All Qualification Certificates</li>
              <li>Last 4 months' salary slip and Bank Statement</li>
              <li>Adhar Card</li>
              <li>Passport Size Photograph with white background</li>
              <li>Relieving letter from last company </li>
              <li>Updated CV</li>
              <li>Offer lette</li>
              <li>Offer letter in hand (Must if have any)</li>
              <li>One canceled cheque leaf or your bank credentials(Salary Purposes)</li>
            </ul>
          </div>
          <div className="bottomParagraf">
            <p>
              Please submit it ASAP, So, we can check the further process. Reply
              to all for this email.
            </p>
            <h3>
              Regard
            </h3>
            <h4>
              HR Team
            </h4>
          </div>
          <div className="footercontant">
            <p>www.insigniaconsultancy.com</p>
            <div className="bottomImg">
              <h2>
                follow us on
              </h2>

              <img src={socialmediaImg} alt="social" className="media-icon" />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
