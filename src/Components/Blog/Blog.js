import React from "react";
import "./Blog.css";
import blogImg from "../../images/blog.png";
import Slider from "react-slick";
import blog1 from "../../images/Group 2479.png";
import blog2 from "../../images/Group 2480.png";
import blog3 from "../../images/Group 2481.png";
import SalesConversation from "../SharedComponents/SalesConversation";
import Footer from "../SharedComponents/Footer";

const Blog = () => {
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
      <div className="why-us-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 justify-content-center">
              <img
                style={{ height: "550px", width: "100%", marginTop: "15px" }}
                src={blogImg}
                alt=""
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="container">
                <h3 className="title">LeadZen.ai Blogs</h3>
                <p className="font-sixteen">
                Check Out Our Blogs For Tips And Tricks To Help Boost Your Sales, Improve Your Marketing, And Hire The Right Talent. 
                </p>
                <div className="input-field">
                  <input type="text" placeholder="Enter Your Email" />
                  <button>Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className=" blog-section-heading">Marketing Blogs</h2>
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
                <a href="/detailBlog">Read More</a>
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
                <a href="/detailBlog">Read More</a>
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
                <a href="/detailBlog">Read More</a>
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
                <a href="/detailBlog">Read More</a>
              </div>
              <div className="loc-time-div">
                <p className="me-1">Leadzen</p>
                <p>| September 3, 2021</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="container">
        <h2 className=" blog-section-heading">Recruitment Blogs</h2>
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
                <a href="/detailBlog">Read More</a>
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
                <a href="/detailBlog">Read More</a>
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
                <a href="/detailBlog">Read More</a>
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
                <a href="/detailBlog">Read More</a>
              </div>
              <div className="loc-time-div">
                <p className="me-1">Leadzen</p>
                <p>| September 3, 2021</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="container">
        <h2 className=" blog-section-heading">Sales Blogs</h2>
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
                <a href="/detailBlog">Read More</a>
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
                <a href="/detailBlog">Read More</a>
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
                <a href="/detailBlog">Read More</a>
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
                <a href="/detailBlog" className="pb-3">
                  Read More
                </a>
              </div>
              <div className="loc-time-div card-footer">
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

export default Blog;
