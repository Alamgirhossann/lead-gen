import React from "react";
import "./Style/style.css";
import logo from "../../images/Group 183.png";
import facebook from "../../images/Social Icons_2.png";
import twitter from "../../images/Social Icons_1.png";
import linkedin from "../../images/Group 2848.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container py-5">
          <div className="row">
            <div className="col text-white ">
              <div className="col-one">
              <img className='img-fluid' src={logo} alt="" />
              <p style={{fontSize:"14px" }}>
                Leadzen.ai is the most intelligent lead generation tool as it
                integrates artificial intelligence and real-time updates into
                the prospecting process.
              </p>
              <img className='pe-3' src={facebook} alt="" />
              <img className='pe-3' src={twitter} alt="" />
              <img className='pe-3' src={linkedin} alt="" />
              <p>support@leadzen.ai</p>
              </div>
            </div>
            <div className="col text-white pt-3 ">
              <div className="col-two">
              <h6 style={{fontSize:"24px"}}>leadzen.ai</h6>
              <a href="#">About</a>
              <a href="pricing">Pricing</a>
              <a href="https://tidycal.com/sonakshi">Book a Demo</a>
              <a href="contactUs">Contact Us</a>
              <a href="https://leadzen-dev.analystt.ai/signUp">Sign Up</a>
              </div>
            </div>
            <div className="col text-white pt-3 ">
             <div className="col-three">
             <h6 style={{fontSize:"24px"}}>leadzen.ai For</h6>
              <a href="/sales">Sales</a>
              <a href="#">Marketing</a>
              <a href="#">Talent Acquisition</a>
             </div>
            </div>
            <div className="col text-white pt-5">
              <a href="/blog">Blog</a>
              <a href="#">Media Kit</a>
              <button className='extension-btn my-3'>Get Chrome Extension</button>
              <button className='extension-btn my-3'>Pricing</button>
            </div>
          </div>
          <div className="row text-white py-3">
            <div className="col"><p className='conditions'>Privacy Policy</p></div>
            <div className="col"><p className='conditions'>Terms & Conditions</p></div>
            <div className="col"><p className='conditions'>Don't Sell My Information</p></div>
            <div className="col"><p className='conditions'>Opt Out</p></div>
            <div className="col"><p className='conditions'>Our Data</p></div>
            <div className="col"><p className='conditions'>Privacy Centre</p></div>
            <div className="col"><p className='conditions'>Cookie Policy</p></div>
            <div className="col"><p className='conditions'>Terms of Service</p></div>
          </div>
          <div className="text-center text-white">
            <p className="pt-3">
              1505 - Peninsula Park, Lane of Fun Republic, Veera Desai Rd,
              Andheri West, Mumbai, Maharashtra 400053 l +918080171171
            </p>
            <p>Analystt AI Technology Pvt Ltd 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
