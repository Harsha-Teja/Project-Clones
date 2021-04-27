import React from "react";
import "./Hero.css"

function ReverseHero ({title1, title2, title3, text, heroimage}) {
    return(
        <div className="reversehero">
        <div className="reversehero-content">
            <div className="reversehero-content-container">
                <div className="reversehero-content-title1"> {title1}</div>
                <div className="reversehero-content-title2"> {title2}</div>
                <div className="reversehero-content-title3"> {title3}</div>
                <div className="reversehero-content-text">{text}</div>
            </div>
        </div>
        <div className="reversehero-illustration">
            <img src={heroimage} alt="Teacher teaching illustration"/>
        </div>
        </div>
    )
}

export default ReverseHero;