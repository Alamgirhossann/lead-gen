import React from "react";
import Footer from "../SharedComponents/Footer";
import SalesConversation from "../SharedComponents/SalesConversation";
import marketingdImg from "../../images/marketing.png";
import marketing1 from "../../images/marketing (1).png";
import marketing2 from "../../images/marketing (2).png";
import marketing3 from "../../images/marketing (3).png";
import Slider from "react-slick";
import bulkImg from "../../images/bulk upload.gif";
import enrich from "../../images/Group 2631.png";
import lead from "../../images/Group 2632.png";
import social from "../../images/Group 2631 (1).png";
import text from "../../images/Group 2633.png";
import smart from "../../images/Group 2636.png";

const Marketing = () => {
  var salesSettings = {
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
    <div>
      <div className="why-us-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
              <div>
                <h3 className="langind-page-head">For Marketing</h3>
                <p className="font-sixteen">
                  Use your competitor’s social media to scope out new audiences
                  and target them directly.
                </p>
                <button className="started-btn">Get Started with a Demo</button>
              </div>
            </div>
            <div className="col-md-6 justify-content-center order-1 order-md-2">
              <img
                style={{ height: "550px", width: "100%", marginTop: "15px" }}
                src={marketingdImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className=" conversation-title pt-4 mt-5">
            <h2 className=" text-center">Find Your Next Customer</h2>
          </div>
        </div>

        <div className="conversation-div">
          <div className="chat-one">
            <p className="m-0">
              I want a list of Senior Managers in Chandigarh
            </p>
          </div>
          <div className="chat-two">
            <p className="m-0">Want contact of semi-conductor suppliers</p>
          </div>
          <div className="chat-three">
            <p className="m-0">
              Give me a list of people following Jio on Instagram
            </p>
          </div>
          <div className="chat-four">
            <p className="m-0">
              Get latest contact details and information of the procurement head
              of Cipla
            </p>
          </div>
          <div className="chat-five">
            <p className="m-0">
              Get latest contact details and information of the procurement head
              of Cipla
            </p>
          </div>
        </div>
      </div>
      <div className="text-center container">
        <div className="w-100 d-flex justify-content-center">
          <div className="bulk-img-div">
            <img src={bulkImg} alt="" />
          </div>
        </div>

        <div className="pt-4">
          <p style={{ fontSize: "24px", fontWeight: "600" }}>
            Get Enriched Data. So You Can Sell More.
          </p>
          <p style={{ fontSize: "18px" }}>
            Our AI powered prospecting engine tracks and collects real-time
            information about potential customers, so you can target them
            directly and increase your sales exponentially.
          </p>
        </div>
      </div>
      <div className="text-center container">
        <h3 className="langind-page-head py-4">Key Benefits</h3>
        <div className="wraper">
          <div className="blank">
            <Slider {...salesSettings}>
              <div>
                <img
                  style={{
                    height: "450px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                  src={marketing1}
                  alt=""
                />
                <div className="pt-4">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Converse directly with the Decision Maker
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Don’t worry about the hierarchy. Call the right person and
                    make the sale. Hyper-search to find the right prospect
                  </p>
                </div>
              </div>
              <div>
                <img
                  style={{
                    height: "450px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                  src={marketing2}
                  alt=""
                />
                <div className="pt-4">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Converse directly with the Decision Maker
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Don’t worry about the hierarchy. Call the right person and
                    make the sale. Hyper-search to find the right prospect
                  </p>
                </div>
              </div>
              <div>
                <img
                  style={{
                    height: "450px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                  src={marketing3}
                  alt=""
                />
                <div className="pt-4">
                  <p style={{ fontSize: "24px", fontWeight: "600" }}>
                    Converse directly with the Decision Maker
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    Don’t worry about the hierarchy. Call the right person and
                    make the sale. Hyper-search to find the right prospect
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h3 className="langind-page-head py-4">Prospecting Made Easy</h3>
        <p>With 5 types of searches</p>
        <div className="easy-prospecting">
          <div className="row">
            <div className="col">
              <div>
                <img src={enrich} alt="" />
                <h2 className="pt-3">Enrich Data</h2>
              </div>
            </div>
            <div className="col">
              <img src={lead} alt="" />
              <h2 className="pt-3">Lead Contact</h2>
            </div>
            <div className="col">
              <img src={social} alt="" />
              <h2 className="pt-3">Social URL</h2>
            </div>
            <div className="col">
              <img src={text} alt="" />
              <h2 className="pt-3">Text Based Search</h2>
            </div>
            <div className="col">
              <img src={smart} alt="" />
              <h2 className="pt-3">Smart Filter</h2>
            </div>
          </div>
        </div>
      </div>
      <SalesConversation />
      <Footer />
    </div>
  );
};

export default Marketing;
