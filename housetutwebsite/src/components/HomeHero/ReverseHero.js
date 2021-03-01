import React from "react";
import "./Hero.css"

function ReverseHero ({ReverseHeroImage, ReverseHeroTitle, ReverseHeroText, ReverseHeroButton1, ReverseHeroButton2}) {
    return(
            <div className="hero">
                <div className="hero-illustration">
                    <img src={ReverseHeroImage} alt="Teacher teaching illustration"/>
                </div>
                <div className="hero-content">
                    <div className="hero-content-container">
                        <div className="hero-content-title">{ReverseHeroTitle} </div>
                        <div className="hero-content-text">{ReverseHeroText}</div>
                        <div className="hero-content-button">
                        <button className="hero-content-button-1">{ReverseHeroButton1}</button>
                        <button className="hero-content-button-2"> {ReverseHeroButton2}</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ReverseHero;