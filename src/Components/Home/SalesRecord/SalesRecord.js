import React from "react";
import "../../Home/Style/style.css";
import sales from "../../../images/sales.png";

const SalesRecord = () => {
  return (
    <div className='container'>
      <div className="text-center">
        <h3 className="pt-4 landing-page-head">LeadZen.ai Can Help You</h3>
        <p style={{ fontSize: "24px", fontWeight: "600" }}>
          Break your sales record
        </p>
        <p style={{ fontSize: "16px" }}>
          Instantly find your next loyal customer and boost your company’s sales
          by getting top leads across various sectors.
        </p>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src={sales} alt="" />
        </div>
        <div className="row">
          <div className="col text-center">
            <button className="sales-record-btn">Sales</button>
          </div>
          <div className="col text-center">
            <button className="sales-record-btn">Recruitment </button>
          </div>
          <div className="col text-center">
            <button className="sales-record-btn">Marketing</button>
          </div>
          <div className="col text-center">
            <button className="sales-record-btn">more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRecord;
