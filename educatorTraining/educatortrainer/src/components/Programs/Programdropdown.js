import React from "react"
import { useState } from "react";
import "./Programdropdown.css";
import {NavLink} from "react-router-dom";

function Programdropdown() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
        {/* The options buttons */}
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Certifications
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Short Courses
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Programs
        </button>
      </div>

    {/* The Drop down contents  */}
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <ul className="nav-links">
                <div className="cards-whyht">
                    <div className="cards-rows">
                        <li className="navbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="nav-link" 
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
                        <li>
                            <div className="cards-whyht-rowtwo">
                                <div className="cards-whyht-rowtwo-card">
                                    <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                                    <div className="cards-whyht-row-cardtitle-type"> Short Course</div>
                                    <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                                    <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                        To create a production build, use npm run build.</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="cards-whyht-rowtwo">
                                <div className="cards-whyht-rowtwo-card">
                                    <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                                    <div className="cards-whyht-row-cardtitle-type"> Program Module</div>
                                    <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                                    <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                        To create a production build, use npm run build.</div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
        {/* Second one  */}
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="cards-whyht">
                <div className="cards-rows">
                    <div className="cards-whyht-rowone">
                        <div className="cards-whyht-rowone-card">
                            <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                            <div className="cards-whyht-row-cardtitle-type"> Certificate</div>
                            <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                            <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                To create a production build, use npm run build.</div>
                        </div>
                    </div>
                    <div className="cards-whyht-rowtwo">
                        <div className="cards-whyht-rowtwo-card">
                            <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                            <div className="cards-whyht-row-cardtitle-type"> Short Course</div>
                            <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                            <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                To create a production build, use npm run build.</div>
                        </div>
                    </div>
                    <div className="cards-whyht-rowtwo">
                        <div className="cards-whyht-rowtwo-card">
                            <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                            <div className="cards-whyht-row-cardtitle-type"> Program Module</div>
                            <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                            <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                To create a production build, use npm run build.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Third one  */}
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="cards-whyht">
                <div className="cards-rows">
                    <div className="cards-whyht-rowone">
                        <div className="cards-whyht-rowone-card">
                            <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                            <div className="cards-whyht-row-cardtitle-type"> Certificate</div>
                            <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                            <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                To create a production build, use npm run build.</div>
                        </div>
                    </div>
                    <div className="cards-whyht-rowtwo">
                        <div className="cards-whyht-rowtwo-card">
                            <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                            <div className="cards-whyht-row-cardtitle-type"> Short Course</div>
                            <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                            <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                To create a production build, use npm run build.</div>
                        </div>
                    </div>
                    <div className="cards-whyht-rowtwo">
                        <div className="cards-whyht-rowtwo-card">
                            <i className="fas fa-money-check-alt cards-whyht-row-cardicon"></i>
                            <div className="cards-whyht-row-cardtitle-type"> Program Module</div>
                            <div className="cards-whyht-row-cardtitle"> Expert tutors</div>
                            <div className="cards-whyht-row-cardtext"> Note that the development build is not optimized.
                                To create a production build, use npm run build.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Programdropdown;