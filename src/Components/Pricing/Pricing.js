import React from "react";
import Footer from "../SharedComponents/Footer";
import SalesConversation from "../SharedComponents/SalesConversation";
import TrustedBy from "../SharedComponents/TrustedBy";
import pricingImg from "../../images/Group 2608.png";
import "./Pricing.css";
import tikImg from "../../images/Combined Shape.png";
import thumb from "../../images/thumb.png";
import searchIcon from "../../images/Group 2501 (1).png";
import ExtractingIcon from "../../images/Group 2585.png";
import dataIcon from "../../images/Group 2502.png";
import integrationIcon from "../../images/Group 2586.png";

const Pricing = () => {
  return (
    <div>
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 justify-content-center">
              <img
                style={{ height: "550px", width: "100%", marginTop: "15px" }}
                src={pricingImg}
                alt=""
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="container">
                <h3 className="title"><span><i>Unlimited</i></span> Freemium</h3>
                <h5 className="title-description">
                  Smart Data at Smart Prices
                </h5>
                <p style={{ fontSize: "18px" }}>
                  Compare packages and find the one that works best for you.
                </p>

                <button className="started-btn">Get Started with a Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="price-category container my-5">
        <div className="d-flex justify-content-center">
          <div>
            <img className="me-2" src={thumb} alt="" />
          </div>
          <p className="font-sixteen">
            Get 30% OFF on yearly Standard , Silver & gold plan and 40% on
            Enterprise Analystt Plan
          </p>
        </div>
        <div className="row">
          <div className="col">
            <div className="category mb-3">
              <div className="heading">
                <p></p>
              </div>
              <div className="px-3 font-sixteen">
                <p className="border-under py-3">
                  Comprehensive Person Profile/Month (Phone Number Included)
                </p>
                <p className="border-under py-2">Email IDs/Month</p>
                <p className="border-under py-2">
                  Unlimited Historical Data Access
                </p>
                <p className="border-under py-2">Excel Data Export</p>
                <p className="text-center py-2 pb-4">Price per month</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="col">
            <div className="category mb-3">
              <div className="heading">
                <h4>Standard</h4>
              </div>
              <div className="px-3 font-sixteen">
                <p className="border-under py-3">100 Credits/Month</p>
                <p className="border-under py-3">500 Credits/Month</p>
                <p className="border-under py-3">Yes</p>
                <p className="border-under py-3">Yes</p>
                <p className="price-plan py-2">INR 5000</p>
              </div>
              <div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="category mb-3">
              <div className="heading">
                <h4>Starter</h4>
              </div>
              <div className="px-3 font-sixteen">
                <p className="border-under py-3">375 Credits/Month</p>
                <p className="border-under py-3">1500 Credits/Month</p>
                <p className="border-under py-3">Yes</p>
                <p className="border-under py-3">Yes</p>
                <p className="price-plan py-2">INR 5000</p>
              </div>
              <div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="category mb-3">
              <div className="heading">
                <h4>Growth</h4>
              </div>
              <div className="px-3 font-sixteen">
                <p className="border-under py-3">850 Credits/Month</p>
                <p className="border-under py-3">3000 Credits/Month</p>
                <p className="border-under py-3">Yes</p>
                <p className="border-under py-3">Yes</p>
                <p className="price-plan py-2">INR 5000</p>
              </div>
              <div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="category mb-3">
              <div className="heading">
                <h4>Enterprise</h4>
              </div>
              <div className="px-3 font-sixteen">
                <p className="border-under py-3">5000 Credits/Month</p>
                <p className="border-under py-3">20000 Credits/Month</p>
                <p className="border-under py-3">Yes</p>
                <p className="border-under py-3">Yes</p>
                <p className="price-plan py-2">INR 5000</p>
              </div>
              <div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <small style={{ fontSize: "14px" }}>
            Local taxes(VAT, GST, etc.) will be charged in addition to the
            prices mentioned.
          </small>
        </div>
      </div>
      <div className="spend-credit my-5 container">
        <h2 className="text-center pb-4">Spend credit on</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="credit-head mb-3">
              <p>
                <img className="me-2" src={searchIcon} alt="" />
                Searching by
              </p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>
                A specific company criteria (eg: Semiconductor, Mumbai,
                Managers, >200 Employees)
              </p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Typing individual name (eg: ‘Bill Gates’)</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Bulk upload contact or name sheet via excel</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>
                Any other customized requirement (Applicable for gold &
                enterprise packages)
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="credit-head mb-3">
              <p>
                <img className="me-2" src={ExtractingIcon} alt="" />
                Extracting Contact Data
              </p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Of likers, commentors & group members of Facebook</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Of likers & followers on Instagram</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Of followers on Twitter</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Of people who have searched a keyword on Twitter</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Of likers, commentors & group members of LinkedIn</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="credit-head mb-3">
              <p>
                <img className="me-2" src={dataIcon} alt="" />
                Getting Data of
              </p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Real-Time MCA register companies</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p> Newly Funded Startups</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Naukri & Monster Job Postings</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Contact data of PE/VCs & Angel Investors</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="credit-head mb-3">
              <p>
                <img className="me-2" src={integrationIcon} alt="" />
                Integration
              </p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>API</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>Chrome Extension</p>
            </div>
            <div className="d-flex">
              <div>
                <img className="me-2" src={tikImg} alt="" />
              </div>
              <p>CRM Platform</p>
            </div>
          </div>
        </div>
      </div>
      <TrustedBy />
      <SalesConversation />
      <Footer />
    </div>
  );
};

export default Pricing;
