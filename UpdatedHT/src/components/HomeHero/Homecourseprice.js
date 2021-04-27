import React from "react";
import "./Homecourseprice.css"

function Homecourseprice () {
    return(
            <div className="homecourseprice">
                <div className="homecoursepricetitle">
                    <div className="homecoursepricetext"> Classses Starting as low as  <strong className="logocolor">250 INR per class</strong>.</div>
                    <div className="homecoursepricesubtext"> Your kid earns certification after every level</div>
                </div>
                <div className="homecoursepricecontainer">
                    {/* First */}
                    <div className="homecoursepricewrapper">
                        <div className="homecoursepricewrappertitle">
                            <div className="homecoursepricewrappertitletext">Beginner</div>
                            <div className="homecoursepricewrappersubtext">32 Classes</div>
                        </div>
                        <div className="homecoursepricewrappercourse">
                            <div className="homecoursepricewrappercoursetitle">Course Includes</div>
                            <div className="homecoursepricewrappercoursetext">🔖 1 Certification</div>
                        </div>
                        <div className="homecoursepricewrappercost">                            
                            <div className="homecoursepricewrappercostoriginal">
                            <hr/>
                                <div className="homecoursepricewrappercostoriginalone">Rs. 11,200 </div>
                                <div className="homecoursepricewrappercostoriginaltwo">Rs. 350 per class </div>
                            </div>
                            <div className="homecoursepricewrappercostshow"> Rs.14,400</div>
                        </div>
                        <div className="homecoursepricewrapperbutton">Book a Free Trial</div>
                    </div>
                    {/* Second */}
                    <div className="homecoursepricewrapper">
                        <div className="homecoursepricewrappertitle" style={{backgroundColor: "lightgreen"}}>
                            <div className="homecoursepricewrappertitletext">Intermediate</div>
                            <div className="homecoursepricewrappersubtext">96 Classes</div>
                        </div>
                        <div className="homecoursepricewrappercourse">
                            <div className="homecoursepricewrappercoursetitle">Course Includes</div>
                            <div className="homecoursepricewrappercoursetext">🔖 3 Certification</div>
                        </div>
                        <div className="homecoursepricewrappercost">                            
                            <div className="homecoursepricewrappercostoriginal">
                            <hr/>
                                <div className="homecoursepricewrappercostoriginalone">Rs. 28,800 </div>
                                <div className="homecoursepricewrappercostoriginaltwo" style={{color:"lightgreen"}}>Rs. 300 per class </div>
                            </div>
                            <div className="homecoursepricewrappercostshow"> Rs.38,400</div>
                        </div>
                        <div className="homecoursepricewrapperbutton" style={{backgroundColor: "lightgreen"}}>Book a Free Trial</div>
                    </div>
                    {/* Third */}
                    <div className="homecoursepricewrapper">
                        <div className="homecoursepricewrappertitle" style={{backgroundColor: "lightblue"}}>
                            <div className="homecoursepricewrappertitletext">Advanced</div>
                            <div className="homecoursepricewrappersubtext">480 Classes</div>
                        </div>
                        <div className="homecoursepricewrappercourse">
                            <div className="homecoursepricewrappercoursetitle">Course Includes</div>
                            <div className="homecoursepricewrappercoursetext">🔖 15 Certification</div>
                        </div>
                        <div className="homecoursepricewrappercost">                            
                            <div className="homecoursepricewrappercostoriginal">
                            <hr/>
                                <div className="homecoursepricewrappercostoriginalone">Rs. 1,20,200 </div>
                                <div className="homecoursepricewrappercostoriginaltwo" style={{color:"lightblue"}}>Rs. 250 per class </div>
                            </div>
                            <div className="homecoursepricewrappercostshow"> Rs.1,68,400</div>
                        </div>
                        <div className="homecoursepricewrapperbutton" style={{backgroundColor: "lightblue"}}>Book a Free Trial</div>
                    </div>
                </div>
            </div>
    )
}

export default Homecourseprice;