import React, { useState } from "react";
import "./ContactUs.css";
import logo from "../../images/logo- without BG.png";
import facebook from "../../images/Social Icons (5).png";
import twitter from "../../images/Social Icons (6).png";
import linkedin from "../../images/Social Icons (7).png";
import Footer from "../SharedComponents/Footer";
import SalesConversation from "../SharedComponents/SalesConversation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ContactUs = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className="why-us-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h3 className="title">Contact Us</h3>
                <img
                  style={{ height: "45px", width: "140px", marginTop: "15px" }}
                  src={logo}
                  alt=""
                />
                <p className="font-sixteen">
                  1505 - Peninsula Park, Lane of Fun Republic, Veera Desai Rd,
                  Andheri West, Mumbai, Maharashtra 400053 +91 8080 171 171
                </p>
                <div>
                  <img
                    style={{ width: "24px", marginRight: "5px" }}
                    src={facebook}
                    alt=""
                  />
                  <img
                    style={{ width: "24px", marginRight: "5px" }}
                    src={twitter}
                    alt=""
                  />
                  <img
                    style={{ width: "24px", marginRight: "5px" }}
                    src={linkedin}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="container">
                <div className="contact-form">
                  <p>
                    Leave your contact details below, and we will get in touch
                  </p>
                  <div class="mb-3">
                    <label for="name" class="form-label">
                      Name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="name"
                      placeholder="eg. John"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="eg. Johnsmith07@xyz.com"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="number" class="form-label">
                      Phone Number
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="number"
                      placeholder="eg. xxxx-xxx-xxx"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="description" class="form-label" />
                    Description
                    <textarea
                      class="form-control"
                      id="description"
                      rows="3"
                    ></textarea>
                  </div>
                  <button className="submit-btn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="calender-container ">
        <div className="text-center py-4">
          <p style={{ fontSize: "36px", fontWeight: "600" }}>OR</p>
          <p style={{ fontSize: "36px", fontWeight: "600" }}>Schedule a Demo</p>
        </div>
        <div className="row m-0">
          <div className="col-md-6 d-flex justify-content-center">
            <Calendar
              onChange={onChange}
              value={value}
              className="react-calendar"
            />
          </div>
          <div className="col-md-6">
            <div className="time-select-section">
              <h3
                className="text-center"
                style={{ fontSize: "24px", fontWeight: "600" }}
              >
                Select Time Slot
              </h3>
              <div className="time-slot-div">
                <span>11:30 AM - 12:00 AM</span>
              </div>
              <div className="time-slot-div">
                <span>12:30 PM - 01:00 AM</span>
              </div>
              <div className="time-slot-div">
                <span>01:30 AM - 02:00 AM</span>
              </div>

              <div className="text-center">
                <button className="demo-btn">Schedule a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thanks-container">
        <p>
          Thanks for your <br /> interest in LeadZen.AI!
        </p>
      </div>
      <SalesConversation />
      <Footer />
    </div>
  );
};

export default ContactUs;
