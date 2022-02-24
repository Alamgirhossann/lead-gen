import React from "react";
import Footer from "../SharedComponents/Footer";
import SalesConversation from "../SharedComponents/SalesConversation";
import blogDetailImg from "../../images/Group 2484.png";
import blog1 from "../../images/Group 2479.png";
import blog2 from "../../images/Group 2480.png";
import blog3 from "../../images/Group 2481.png";
import Slider from "react-slick";

const DetailBlog = () => {
  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    variableWidth: false,
    slidesToScroll: 1,
    prevArrow: <button class="slide-arrow prev-arrow btn-category"></button>,
    nextArrow: <button class="slide-arrow next-arrow btn-category"></button>,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="">
          <div className="row m-0">
            <div className="col-md-6 justify-content-center">
              <img
                style={{ height: "550px", width: "100%", marginTop: "15px" }}
                src={blogDetailImg}
                alt=""
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="container">
                <h3 className="langind-page-head">
                  How To Get Contacts Data Of Indian Funded Companies Using Jarv
                </h3>
                <p>
                  Check Out Our Blogs For Tips And Tricks To Help Boost Your
                  Sales, Improve Your Marketing, And Hire The Right Talent.
                </p>
                <div className="date-field">
                  
                    <p>Leadzen</p>
                    <p>September 3, 2021</p>
                    <p>No Comments</p>
                </div>
              </div>
            </div>
          </div>
          <div className='m-0'>
            <p>
              Jarv Is A Smart Tool That Scrapes Information From The Web And
              Gives You Real Time Information At Your Request. Just Send In Your
              Request On Our Page And Jarv Will Show You Recent Events On
              Facebook, Twitter, And All Other Social Sites. This Is Very
              Powerful Because You Can Scrape Information That You’d Otherwise
              Have To Sort Through Manually. We Also Also Take Requests Every 5
              Minutes To Show You When New Content Has Been Scraped So You Can
              Stay Up To Date With The Old And New Content On Your Websites, As
              Well As Worldwide Pop Culture News. QUESTIONS? ANYTHING I MESSED
              UP WRONG? Leave Comments Below And Let Us Know! We Love Helping
              New SEOs And Other Marketers Like To Use Jarv The Most. Just
              Browse Through The Various Options In The Left Sidebar For
              Different Applications. Choose A Jarv.: As Soon As We Receive Your
              Request, Jarv Will Scrape The Web And Return Some Important
              Information On Your Request. You Can Then Start Using Those Data
              Points As You Wish. Jarv Is Powered By Ruby On Rails And Has A
              Built In Form Generator To Help You Build Remarkable Forms. And
              Our Bot Will Crawl The Internet And Pull Out Important Information
              For You.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className='text-center'>More Blogs</h2>
        <Slider {...blogSettings}>
          <div className="px-2">
            <div className="blog-card">
              <img
                style={{
                  height: "250px",
                  width: "100%",
                  borderRadius: "20px 20px 0px 0px",
                }}
                src={blog1}
                alt=""
              />
              <div className="pt-4 px-3">
                <p style={{ fontSize: "20px", fontWeight: "600" }}>
                  Why Researching A Profile Before The Call Is Of Utmost
                  Importance
                </p>
                <p style={{ fontSize: "14px" }}>
                  For Sales Conversion, It Is Crucial To Understand And Know
                  Your Audience. Convert Your Cold Calls To Hot Leads And
                  Convert Them To New Customers.
                </p>
                <a href="#">Read More</a>
              </div>
              <div className="loc-time-div">
                <p className="me-1">Leadzen</p>
                <p>| September 3, 2021</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="blog-card">
              <img
                style={{
                  height: "250px",
                  width: "100%",
                  borderRadius: "20px 20px 0px 0px",
                }}
                src={blog2}
                alt=""
              />
              <div className="pt-4 px-3">
                <p style={{ fontSize: "20px", fontWeight: "600" }}>
                  How To Get Contacts Data Of Indian Funded Companies Using Jarv
                </p>
                <p style={{ fontSize: "14px" }}>
                  Jarv Is A Smart Tool That Scrapes Information From The Web And
                  Gives You Real Time Information At Your Request. Just Send In
                  Your Request
                </p>
                <a href="#">Read More</a>
              </div>
              <div className="loc-time-div">
                <p className="me-1">Leadzen</p>
                <p>| September 3, 2021</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="blog-card">
              <img
                style={{
                  height: "250px",
                  width: "100%",
                  borderRadius: "20px 20px 0px 0px",
                }}
                src={blog3}
                alt=""
              />
              <div className="pt-4 px-3">
                <p style={{ fontSize: "20px", fontWeight: "600" }}>
                  10 To-Dos In A Sales Call
                </p>
                <p style={{ fontSize: "14px" }}>
                  Convert Your Sales Call To A Hot Leads. 10 Must Try Tips And
                  Tricks To Ensure That. 1. Research Before The Call 2. Try A
                </p>
                <a href="#">Read More</a>
              </div>
              <div className="loc-time-div">
                <p className="me-1">Leadzen</p>
                <p>| September 3, 2021</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="blog-card">
              <img
                style={{
                  height: "250px",
                  width: "100%",
                  borderRadius: "20px 20px 0px 0px",
                }}
                src={blog2}
                alt=""
              />
              <div className="pt-4 px-3">
                <p style={{ fontSize: "20px", fontWeight: "600" }}>
                  How To Get Contacts Data Of Indian Funded Companies Using Jarv
                </p>
                <p style={{ fontSize: "14px" }}>
                  Jarv Is A Smart Tool That Scrapes Information From The Web And
                  Gives You Real Time Information At Your Request. Just Send In
                  Your Request
                </p>
                <a href="#">Read More</a>
              </div>
              <div className="loc-time-div">
                <p className="me-1">Leadzen</p>
                <p>| September 3, 2021</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <SalesConversation />
      <Footer />
    </div>
  );
};

export default DetailBlog;
