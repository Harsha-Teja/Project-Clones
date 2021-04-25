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
            <ul className="programdown-nav-links">
                <div className="programdown-cards-whyht">
                    <div className="programdown-cards-rows">
                        <li className="programdownnavbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="programdown-nav-link" 
                            >
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Vocational Courses</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                            </NavLink>
                        </li>
                        <li className="programdownnavbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="programdown-nav-link" 
                            >
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Lesson Design</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                            </NavLink>
                        </li>
                        <li className="programdownnavbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="programdown-nav-link" 
                            >
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Teaching Methodologies</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                            </NavLink>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
        {/* Second one  */}
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <ul className="programdown-nav-links">
                <div className="programdown-cards-whyht">
                    <div className="programdown-cards-rows">
                        <li className="programdownnavbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="programdown-nav-link" 
                            >
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Behaviour Management</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                            </NavLink>
                        </li>
                        <li className="programdownnavbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="programdown-nav-link" 
                            >
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Classroom Discipline</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                            </NavLink>
                        </li>
                        <li className="programdownnavbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="programdown-nav-link" 
                            >
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Computer Assisted Learning</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                            </NavLink>
                        </li>
                    </div>
                </div>
            </ul>
        </div>

        {/* Third one  */}
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <ul className="programdown-nav-links">
                <div className="programdown-cards-whyht">
                    <div className="programdown-cards-rows">
                        <li className="programdownnavbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="programdown-nav-link" 
                            >
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Adult Education
</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                            </NavLink>
                        </li>
                        <li className="programdownnavbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="programdown-nav-link" 
                            >
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Continuous and Comprehensive Evaluation</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                            </NavLink>
                        </li>
                        <li className="programdownnavbarli">
                            <NavLink 
                                exact={true}
                                to="/experttutors" 
                                className="programdown-nav-link" 
                            >
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Community Learning</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                            </NavLink>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Programdropdown;