import React from "react";
import heroillustration from "../../Assets/svg/hero-illustration.svg";
import "./Hero.css"

function Hero () {
    return(
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-content-container">
                        <div className="hero-content-title"> We hand pick the perfect tutor for you</div>
                        <div className="hero-content-text">Note that the development build is not optimized.
                            To create a production build, use npm run build.Note that the development build is not optimized.
                            To create a production build, use npm run build.</div>
                        <div className="hero-content-button">
                        <button className="hero-content-button-1">Find a Tutor</button>
                        <button className="hero-content-button-2"> Become Tutor</button>
                        </div>
                    </div>
                </div>
                <div className="hero-illustration">
                    <img src={heroillustration} alt="Teacher teaching illustration"/>
                </div>
            </div>
    )
}

export default Hero;