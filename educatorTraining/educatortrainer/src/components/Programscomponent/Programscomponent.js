import React from "react"
import "./Programscomponent.css"
import {NavLink} from "react-router-dom";

function Programs () {
    return (
        <div className="cards-whyht">
            <div className="cards-whyht-title">
                Programs
            </div>
            <ul className="program-nav-links">
                <div className="cards-rows">
                    <li className="programnavbarli">
                    <NavLink 
                        exact={true}
                        to="/Programs" 
                        className="program-nav-link" 
                    >
                        <div className="cards-whyht-rowone">
                            <div className="cards-whyht-rowone-card">
                                <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                                <div className="cards-whyht-row-cardtitle-type"> Certificate</div>
                                <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                                <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                    To create a production build, use npm run build.</div>
                            </div>
                        </div>
                    </NavLink>
                    </li>
                    <li className="programnavbarli">
                    <NavLink 
                        exact={true}
                        to="/Programs" 
                        className="program-nav-link" 
                    >
                    <div className="cards-whyht-rowone">
                    <div className="cards-whyht-rowone-card">
                            <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                            <div className="cards-whyht-row-cardtitle-type"> Certificate</div>
                            <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                            <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                To create a production build, use npm run build.</div>
                        </div>
                    </div>
                    </NavLink>
                    </li>
                    <li className="programnavbarli">
                    <NavLink 
                        exact={true}
                        to="/Programs" 
                        className="program-nav-link"  
                    >
                    <div className="cards-whyht-rowone">
                    <div className="cards-whyht-rowone-card">
                            <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                            <div className="cards-whyht-row-cardtitle-type"> Certificate</div>
                            <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                            <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                To create a production build, use npm run build.</div>
                        </div>
                    </div>
                    </NavLink>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Programs