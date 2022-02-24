import React, { useEffect } from "react";
import "../../Home/Style/style.css";
import jet from "../../../images/homepage.gif";
import realTime from "../../../images/Group 2839.png";
import reach from "../../../images/Group 2840.png";
import extract from "../../../images/Group 2841.png";
import gif from "../../../images/enrich your data.gif";
import gif2 from "../../../images/reach prospect directly.gif";
import gif3 from "../../../images/find exactly what you are looking for.gif";
import gif4 from "../../../images/Real time 2.gif";
import gif5 from "../../../images/company tag search_1.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="nav-bg" style={{ paddingBottom: "30px" }}>
      <div className="row m-0">
        <div className="col-md-6 mt-md-5 order-2 order-md-1">
          <div className="container ms-md-5">
            <h1 className="title">Making Data Smarter</h1>
            <p className="title-description">
              The Most Intelligent AI Powered Real-time Prospecting Engine.
            </p>
            <button className="started-btn py-2">
              Get Started By Booking Demo
            </button>
          </div>
          <div className="row mt-5">
            <div className="col d-flex justify-content-center">
              <div className="leads text-center mb-4">
                <img style={{ marginTop: "-20px" }} src={realTime} alt="" />
                <p className="leads-title">Real Time Leads</p>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="leads text-center mb-4">
                <img style={{ marginTop: "-20px" }} src={reach} alt="" />
                <p className="leads-title">Criteria Based Searches</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <div className="leads-two text-center">
              {" "}
              <img style={{ marginTop: "-20px" }} src={extract} alt="" />
              <p className="leads-title">Accurate & Verified Data</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 order-1 order-md-2">
          <img className="w-100" src={jet} alt="" />
        </div>
      </div>
      <div className="inteligent pt-5">
        <h2 className="pb-3 landing-page-head">
          From Information to Intelligence
        </h2>
        <div className="wraper">
          <div className="blank">
            {/* <HomeWraper> */}
            <Slider {...settings}>
              <div>
                <div className="pt-4">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Enrich Your CRM Data
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    No more cold calls and wrong numbers. Simply bulk upload
                    your existing customers database and get their latest
                    contact numbers, email IDs, designations, and others
                    important informations.
                  </p>
                </div>
                <img
                  style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                  src={gif}
                  alt=""
                />
              </div>
              <div>
                <div className="pt-4">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Know your Prospect Better
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Get access to their phone numbers, work email IDs, social
                    media links, demographics and interests so your next
                    conversation is smoother than ever.
                  </p>
                </div>
                <img
                  style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                  src={gif2}
                  alt=""
                />
              </div>
              <div>
                <div className="pt-4">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Make Criteria Based Searches
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Narrow down your target audience to those that are the
                    perfect fit. With LeadZen.ai, you can search for viable
                    prospects through parameters such as designation, industry,
                    education, company, income group, geography, age, gender and
                    much more.
                  </p>
                </div>
                <img
                  style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                  src={gif3}
                  alt=""
                />
              </div>
              <div>
                <div className="pt-4">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Find Exactly What You Are Looking For
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    From potential customers and talented recruits to a
                    competitive marketing edge, our AI powered engine collects
                    and sends you data for all your business needs.
                  </p>
                </div>
                <img
                  style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                  src={gif4}
                  alt=""
                />
              </div>
              <div>
                <div className="pt-4">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Get Real-Time Leads
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Don’t go looking for your customers, find them when they’re
                    looking for you. LeadZen.ai tracks the likes and comments on
                    your posts and those of your competitors to give you
                    information on potential customers.
                  </p>
                </div>
                <img
                  style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                  src={gif5}
                  alt=""
                />
              </div>
            </Slider>
            {/* </HomeWraper> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
