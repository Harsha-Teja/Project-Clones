import React from "react";
import pic1 from "../../Assets/svg/homecenterpic1.jpg";
import pic2 from "../../Assets/svg/homecenterpic2.jpg";
import "./Homecenter.css"

function Homecenter () {
    return(
            <div className="herocenter">
                <div className="herocentertitle">
                    <div className="herocentertitletext"> Every Child is <strong className="logocolor">Special</strong>. Personalized attension unleashes one's true potential</div>
                </div>
                <div className="herocentersubtitle">
                    <div className="herocentersubtitletext"> Our courses help your child </div>
                </div>
                <div className="herocenterimagescontainer">
                    <div className="herocenterimagesrow">
                        <div className="herocenterimagescol1">
                            <img src={pic1} alt="Home center pic 1" className="homecenterimg"/>
                            <p className="herocenterimagetext">Speak Confidently</p>
                        </div>
                        <div className="herocenterimagescol2">
                            <img src={pic2} alt="Home center pic 2" className="homecenterimg"/>
                            <p className="herocenterimagetext">Speak Confidently</p>
                        </div>
                        <div className="herocenterimagescol3">
                            <img src={pic1} alt="Home center pic 3" className="homecenterimg"/>
                            <p className="herocenterimagetext">Speak Confidently</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Homecenter;