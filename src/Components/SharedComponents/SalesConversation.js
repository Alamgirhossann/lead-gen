import React from "react";
import "./Style/style.css";
import authorsContact1 from "../../images/Group 2356.png";
import authorsContact2 from "../../images/Group 2355.png";
import authorsContact3 from '../../images/Group 2824.png';

const SalesConversation = () => {
  return (
    <div className="container-fluid">
      <div className="main-container my-5">
        <div className="row m-0">
          <div className="col">
            <div className="next-conversation">
              <div className="">
                <h3 className="fw-bold" style={{fontSize:"28px"}}>Take The Lead Now !</h3>
                <p className="pb-4" style={{fontSize:"18px"}}>
                  Subscribe Now and get 5 Free Credits with the most intelligent
                  AI Powered Real-time Prospecting Engine.
                </p>
                <button class="nav-link started-btn px-4" href="#">
                  Get Started by Booking Demo
                </button>
              </div>
            </div>
          </div>
          <div className="col d-none d-md-block">
            <img className='author-1 img-fluid' src={authorsContact1} alt="" />
            <img
              className='author-2 img-fluid'
              src={authorsContact2}
              alt=""
            />
          </div>
          <div>
            <img  className='author-3' src={authorsContact3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesConversation;
