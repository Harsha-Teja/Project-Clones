import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import image from "../../assets/teacherr.png"
import "./Carousle.css"

function CarouselContainerPlacements() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="carousle-full">
        <h2 className="carousle-title">Our Placement Partners</h2>
        <Slider {...settings}>
          <div className="carousle-image">
            <img src={image} alt="first" className="carousle-img"/>
          </div>
          <div className="carousle-image">
          <img src={image} alt="first" className="carousle-img"/>
          </div>
          <div className="carousle-image">
          <img src={image} alt="first" className="carousle-img"/>
          </div>
          <div className="carousle-image">
          <img src={image} alt="first" className="carousle-img"/>
          </div>
          <div className="carousle-image">
          <img src={image} alt="first" className="carousle-img"/>
          </div>
          <div className="carousle-image">
          <img src={image} alt="first" className="carousle-img"/>
          </div>
        </Slider>
      </div>
    );
  }

  export default CarouselContainerPlacements;
