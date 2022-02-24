import React from "react";
import "../../Home/Style/style.css";
import realtime from '../../../images/real time.gif'

const AskAnalyst = () => {
  return (
    <div className="">
      <div className="text-center mt-5 pt-5">
        <h3 className="landing-page-head">We Get What You Mean</h3>
        <p style={{fontSize:"16px"}}>
          Our NLP (Natural Language Processing) based AI engine understands
          queries, statements <br /> and keywords to provide you with the specific
          datasets you are looking for.
        </p>
        <div className="suggested-container container-fluid mt-5">
          <div className="w-100 d-flex justify-content-center">
            <div className="ask">
              <img src={realtime} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAnalyst;
