import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import image from "../../assets/nsrcellogo.png"
import "./Carousle.css"

function CarouselContainerTestimonials({contentfirst, contentsecond, contentthird, contentfour, contentfive, contentsix}) {
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
        <h2 className="carousle-title">What our students say</h2>
        <Slider {...settings}>
          <div className="carousletwo-image">
            <img src={image} alt="first" className="carousle-img"/>
            <p className="carousle-text">{contentfirst}</p>
          </div>
          <div className="carousletwo-image">
            <img src={image} alt="first" className="carousle-img"/>
            <p className="carousle-text">{contentsecond}</p>
          </div>
          <div className="carousletwo-image">
            <img src={image} alt="first" className="carousle-img"/>
            <p className="carousle-text">{contentthird}</p>
          </div>
          <div className="carousletwo-image">
            <img src={image} alt="first" className="carousle-img"/>
            <p className="carousle-text">{contentsecond}</p>
          </div>
          <div className="carousletwo-image">
            <img src={image} alt="first" className="carousle-img"/>
            <p className="carousle-text">{contentthird}</p>
          </div>
        </Slider>
      </div>
    );
  }
  
  export default CarouselContainerTestimonials;