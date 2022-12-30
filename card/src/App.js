import React from 'react'
import BlockImg from "./images/Rectangle 90.png"

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={BlockImg} alt="" />
        <div className="content">
          <h1>Laura Smith</h1>
          <h5>Frontend Developper</h5>
          <h6>laurasmith.website</h6>
          <div className="btns">
            {/* btn class will have styling to split <vbutton into two on hover see figma */}
            <button type="submit" className="email">Email</button>
            <button className="linkdin">
              Linkedin
            </button>
          </div>
          <div className="details-sec">
            <h3 className="about-title">About</h3>
            <p className="about">
              I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
            <h3 className="interest-title">Interest</h3>
            <p className="interest">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
        <div className="footer">
          <div className="social-media">

          </div>
        </div>
      </div>
    </div>
  )
}

export default App