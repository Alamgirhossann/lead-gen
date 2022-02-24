import React from "react";
import "../../Home/Style/style.css";
import authorMale from "../../../images/Group 2360.png";
import authorFemale from "../../../images/Group 1852.png";

const Recomendation = () => {
  return (
    <div>
      <div className="text-center pb-3">
        <h3 className='landing-page-head'>LeadZen.ai Recommends</h3>
        <p style={{fontSize:"16px"}}>
          Based on searches you have made in the past, our smart data model
          learns exactly what you’re looking for and recommends only the <br />{" "}
          most relevant leads to help your business prosper.
        </p>
      </div>
      <div className="container magic-field d-flex justify-content-center">
        <div className="magic-child-field py-3">
          <p className="text-center fw-bold fs-5">Magic Recomendation</p>
          <p className="text-center">
            Hey based on your latest search interest, there are best
            recomendation for you !! <span className="text-danger">jarv</span>
          </p>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <div className="text-center col-alignment">
                <img className="mb-4" src={authorMale} alt="" />
                <p style={{ fontWeight: "600" }}>Dan Schmitt</p>
                <p>Product Manager</p>
                <p style={{ fontWeight: "500" }}>Amazon</p>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="text-center col-alignment">
                <img className="mb-4" src={authorFemale} alt="" />
                <p style={{ fontWeight: "600" }}>Lan Bey</p>
                <p>Product Manager</p>
                <p style={{ fontWeight: "500" }}>Hexagon AB</p>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="text-center col-alignment">
                <img className="mb-4" src={authorMale} alt="" />
                <p style={{ fontWeight: "600" }}>John Smith</p>
                <p>Product Manager</p>
                <p style={{ fontWeight: "500" }}>Flipkart</p>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="text-center col-alignment">
                <img className="mb-4" src={authorFemale} alt="" />
                <p style={{ fontWeight: "600" }}>Stan Joseph</p>
                <p>Product Manager</p>
                <p style={{ fontWeight: "500" }}>Amazon</p>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="text-center col-alignment">
                <img className="mb-4" src={authorMale} alt="" />
                <p style={{ lineHeight: "20px", fontWeight: "600" }}>
                  Kabre Bey
                </p>
                <p style={{ lineHeight: "20px" }}>Product Manager</p>
                <p style={{ lineHeight: "20px", fontWeight: "500" }}>
                  Hexagon AB
                </p>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="text-center col-alignment">
                <img className="mb-4" src={authorFemale} alt="" />
                <div>
                  <p style={{fontWeight: "600" }}>
                    Robert Brown
                  </p>
                  <p>Product Manager</p>
                  <p style={{fontWeight: "500" }}>
                    Flipkart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
