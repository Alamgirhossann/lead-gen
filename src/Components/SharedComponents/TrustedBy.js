import React from "react";
import "./Style/style.css";
import Slider from "react-slick";
import slide1 from "../../images/Group 2711.png";
import slide2 from "../../images/Group 2712.png";
import slide4 from "../../images/Group 2713.png";
import slide5 from "../../images/Group 2714.png";
import slide6 from "../../images/Group 2715.png";
import slide7 from "../../images/Group 2716.png";
import slide8 from "../../images/Group 2717.png";
import slide9 from "../../images/Group 2718.png";
import slide10 from "../../images/Group 2719.png";
import slide11 from "../../images/Group 2720.png";
import slide12 from "../../images/Group 2721.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pulse } from "react-animations";
import Radium, { StyleRoot } from "radium";

const TrustedBy = () => {
  const styles = {
    bounce: {
      animation: "x 1s",
      animationName: Radium.keyframes(pulse, "pulse"),
    },
  };
  const trustedSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    variableWidth: false,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <h3 className="landing-page-head text-center">Trusted By</h3>
      {/* <StyleRoot>
        <div className="test" style={styles.bounce}> */}
      <Slider {...trustedSettings}>
        <div>
          <img className="slider-img" src={slide1} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slide2} alt="" />
        </div>

        <div>
          <img className="slider-img" src={slide4} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slide5} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slide6} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slide7} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slide8} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slide9} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slide10} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slide11} alt="" />
        </div>
        <div>
          <img className="slider-img" src={slide12} alt="" />
        </div>
      </Slider>
      {/* </div>
      </StyleRoot> */}
      <div>
        <p className="text-end">... and many more</p>
      </div>
    </div>
  );
};

export default TrustedBy;
