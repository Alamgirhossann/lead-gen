import React from "react";
import "./WhyUs.css";
import headImg from "../../images/Group 2691.png";
import apartImg from "../../images/Group 2611 (1).png";
import circleTik from "../../images/Group 2687.png";
import key from "../../images/Group 2688 (1).png";
import squares from "../../images/Group 2689.png";
import sheldTik from "../../images/Group 2690 (1).png";
import comprehansiveImg from "../../images/image 206.png";
import trustedImg from "../../images/image 205.png";
import intelligent from "../../images/image 204.png";
import relevent from "../../images/image 207.png";
import ClientSpeak from "../Home/ClientSpeak/ClientSpeak";
import SalesConversation from "../SharedComponents/SalesConversation";
import Footer from "../SharedComponents/Footer";

const WhyUs = () => {
  return (
    <div>
      <div className="why-us-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
              <div>
                <h3 className="langind-page-head">Why Us</h3>
                <p className="font-sixteen">
                  LeadZen.ai is the most intelligent prospecting tool in today’s
                  digital world. Our AI powered real-time engine doesn’t just
                  track, collate and disseminate data to you, it also helps you
                  leverage that data in the most efficient way possible. It's
                  lead generation and lead acquisition, through leading AI
                  technology.
                </p>
                <button className="started-btn mb-3">
                  Get Started With a Demo
                </button>
              </div>
            </div>
            <div className="col-md-6 justify-content-center order-1 order-md-2">
              <img
                style={{ height: "550px", width: "100%", marginTop: "15px" }}
                src={headImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center container">
        <h3 className="langind-page-head py-5">
          Your One-Stop Prospecting Shop
        </h3>
        <img className="img-fluid" src={apartImg} alt="" />
        <p>
          LeadZen.ai is more than just a data collection tool. It is your
          all-in-one prospecting solution. From lead generation to conversion,
          our smart data model gives you access to all the information you’ll
          ever need to help your business take the lead.
        </p>
      </div>
      <div className="container pb-4">
        <div className="text-center">
          <h3 className="langind-page-head pt-5 pb-3">
            The Gold Standard of Prospecting
          </h3>
          <div className="prospecting-div">
            <div className="row prospecting-child">
              <div className="col-md-6 order-2 order-md-1">
                <div className="d-flex justify-content-center">
                  <div className="circle-tik">
                    <img src={circleTik} alt="" />
                  </div>
                  <div>
                    <h5>Most Comprehensive Information</h5>
                    <p>
                      Real time search available for 1 billion+ records Get data
                      from 500+ sources Get information of global leads with an
                      active social presence
                    </p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <img src={comprehansiveImg} alt="" />
              </div>
            </div>
          </div>
          <div className="prospecting-div">
            <div className="row prospecting-child">
              <div className="col-md-6">
                <img src={trustedImg} alt="" />
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-center">
                  <div>
                    <h5>Most Trusted Source</h5>
                    <p>
                      Real time search available for 1 billion+ records Get data
                      from 500+ sources Get information of global leads with an
                      active social presence
                    </p>
                    <p></p>
                    <p></p>
                  </div>
                  <div className='circle-key'
                  >
                    <img src={key} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prospecting-div">
            <div className="row prospecting-child">
              <div className="col-md-6 order-2 order-md-1">
                <div className="d-flex justify-content-center">
                  <div
                   className='circle-square'
                  >
                    <img src={squares} alt="" />
                  </div>
                  <div>
                    <h5>Most Intelligent Engine</h5>
                    <p>
                      DND Number verification on request Social profiles of
                      individuals and businesses Scoring and verification of
                      Email IDs and Phone Numbers
                    </p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <img src={intelligent} alt="" />
              </div>
            </div>
          </div>
          <div className="prospecting-div">
            <div className="row prospecting-child">
              <div className="col-md-6">
                <img src={relevent} alt="" />
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-center">
                  <div>
                    <h5>Most Relevent Data</h5>
                    <p>
                      NLP based engine converts all statements into queries
                      Training by our bot to provide better leads Smart data
                      model provides relevant lead recommendations
                    </p>
                    <p></p>
                    <p></p>
                  </div>
                  <div
                    className='circle-shild'
                  >
                    <img src={sheldTik} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientSpeak />
      <SalesConversation />
      <Footer />
    </div>
  );
};

export default WhyUs;
