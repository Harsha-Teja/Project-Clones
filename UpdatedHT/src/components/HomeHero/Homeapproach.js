import React from "react";
import pic1 from "../../Assets/svg/homecenterpic1.jpg";
import "./Homeapproach.css"

function Homeapproach () {
    return(
            <div className="heroapproach">
                <div className="heroapproachtitle">
                    <div className="heroapproachtitletext"> One hour of HouseTutoring <strong className="logocolor">supercedes</strong> 8 hours of school</div>
                </div>
                <div className="heroapproachcontainer">
                    <div className="heroapproachleftcontainer">
                        <div className="heroapproachleftwraptitle">Holistic Approach for learning</div>
                        <div className="heroapproachleftwrap">
                            <div className="heroapproachleftwrapone">
                                <div className="heroapproachleftwraponebox1">
                                    <img src={pic1} alt="one" className="heroapproachleftwraponebox1img"/>
                                    <div className="heroapproachleftwraponebox1text">Project based One on One learning</div>
                                </div>
                                <div className="heroapproachleftwraponebox2">
                                    <img src={pic1} alt="two" className="heroapproachleftwraponebox2img"/>
                                    <div className="heroapproachleftwraponebox2text">Flipped Classroom</div>
                                </div>
                            </div>
                        </div>
                        <div className="heroapproachleftwraptitle">A Classroom beyond Imagination</div>
                        <div className="heroapproachleftwrap">
                            <div className="heroapproachleftwrapone">
                                <div className="heroapproachleftwraponebox1">
                                    <img src={pic1} alt="one" className="heroapproachleftwraponebox1img"/>
                                    <div className="heroapproachleftwraponebox1text">Personalize as per your child's needs</div>
                                </div>
                                <div className="heroapproachleftwraponebox2">
                                    <img src={pic1} alt="two" className="heroapproachleftwraponebox2img"/>
                                    <div className="heroapproachleftwraponebox2text">Best Teachers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heroapproachrightcontainer">
                        <img src={pic1} alt="five" className="heroapproachrightcontainerimg"/>
                        <div className="heroapproachrightcontainerdesc">
                            "Tell me and I'll forget, show me and I may remember, involve me and I'll understand."
                        </div>
                        <button className="heroapproachrightcontainerbutton">Book a Free Trail</button>
                    </div>
                </div>
            </div>
    )
}

export default Homeapproach;