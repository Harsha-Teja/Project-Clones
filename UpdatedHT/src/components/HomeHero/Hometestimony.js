import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import image from "../../Assets/images/HouseTutoring.png"
import "./Hometestimony.css"

function CarouselContainerTestimonials({contentfirst, contentsecond, contentthird, contentfour, contentfive, contentsix}) {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 2,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
        <div className="corousleblock">
            <div className="carousle-full">
                <div className="carousletitle">20,000 Parents across the world <stron className="logocolor">love us</stron></div>
                <Slider {...settings}>
                <div className="carousleimagecard">
                    <div className="carousleimagecardpart">
                    <p className="carousletext">"Bla Bla Bla"</p>
                        <img src={image} alt="first" className="carousleimg"/>
                    </div>
                    <div className="carousleauthor"> <stron className="logocolor">|</stron> Harika Narayana</div>
                </div>
                <div className="carousleimagecard">
                    <div className="carousleimagecardpart">
                    <p className="carousletext">"Bla Bla Bla"</p>
                        <img src={image} alt="first" className="carousleimg"/>
                    </div>
                    <div className="carousleauthor"> <stron className="logocolor">|</stron> Harika Narayana</div>
                </div>
                <div className="carousleimagecard">
                    <div className="carousleimagecardpart">
                    <p className="carousletext">"Bla Bla Bla"</p>
                        <img src={image} alt="first" className="carousleimg"/>
                    </div>
                    <div className="carousleauthor"> <stron className="logocolor">|</stron> Harika Narayana</div>
                </div>
                </Slider>
            </div>
      </div>
    );
  }
  
  export default CarouselContainerTestimonials;