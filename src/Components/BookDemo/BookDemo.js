import React from "react";
import "./BookDemo.css";
import author from "../../images/Picture.png";
import nextArrow from "../../images/next.png";

const BookDemo = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <img className="author-img" src={author} alt="" />
          <h2 style={{fontWeight:"600"}}>Sonakshi Pratap</h2>
          <p className="pt-3">Book a meeting with me:</p>
        </div>
      </div>
      <div className='py-4'>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <div className='booking-card'>
            <h4>30 Minute Meeting</h4>
            <p>Book a meeting with me for 30 minutes!</p>
            <button className='book-btn'>
              Book now <img className="next-arrow" src={nextArrow} alt="" />
            </button>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <div className='booking-card'>
            <h4>60 Minute Meeting</h4>
            <p>Book a meeting with me for 60 minutes!</p>
            <button className='book-btn'>
              Book now <img className="next-arrow" src={nextArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BookDemo;
