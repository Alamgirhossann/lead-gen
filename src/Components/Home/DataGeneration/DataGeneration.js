import React from "react";
import dataImage from "../../../images/Group 2672.png";


const DataGeneration = () => {
  return (
    <div>
      <div className="text-center py-4">
        <h3 className='landing-page-head'>Chrome Extension</h3>
        <p style={{fontSize:"16px"}}>
          While you're on a potential customer's website, get <br /> their data
          in one click
        </p>
      </div>
      <div className="text-center py-4">
        <h3 className='landing-page-head'>Turn Browsing into Lead Generation</h3>
        <p style={{fontSize:"16px"}}>
          We’re constantly working, even when you aren’t. Our AI based engine
          continuously scours through 100s of data sources to generate <br />{" "}
          quality leads, all while you browse at your leisure..
        </p>
        <img className="py-5 img-fluid" src={dataImage} alt="" />
      </div>
    </div>
  );
};

export default DataGeneration;
