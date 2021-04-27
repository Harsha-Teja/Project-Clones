import React from "react";
import "./Homecoursecard.css"

function Homecoursecard () {
    return(
            <div className="herocoursecard">
                <div className="herocoursecardtitle">
                    <div className="herocoursecardtext"> There's  <strong className="logocolor">So Much</strong> to learn at HouseTutoring</div>
                </div>
                <div className="herocoursecardscontainer">
                    <div className="herocoursecardwrapper">
                        <div className="herocoursecardwrappertitle">Life Mastery</div>
                        <p className="herocoursecardwrapperdesc">An Offbeat set of courses set for building discipline</p>
                        <ol className="herocoursecardwrapperlist">
                            <li className="herocoursecardwrapperitem">✏️ Habit building</li>
                            <li className="herocoursecardwrapperitem">✏️ Finance for kids</li>
                            <li className="herocoursecardwrapperitem">✏️ Building discipline and focus</li>
                            <li className="herocoursecardwrapperitem">✏️ Meditation and Inner enigneering</li>
                            <li className="herocoursecardwrapperitem">✏️ Leadership building</li>
                        </ol>
                        <div className="herocoursecardwrapperbutton">Explore curriculum</div>
                    </div>
                    <div className="herocoursecardwrapper">
                        <div className="herocoursecardwrappertitle">Math Champ Camp</div>
                        <p className="herocoursecardwrapperdesc">Your child could be a math champ</p>
                        <ol className="herocoursecardwrapperlist">
                            <li className="herocoursecardwrapperitem">✏️ Mental Math</li>
                            <li className="herocoursecardwrapperitem">✏️ Vedic Math</li>
                            <li className="herocoursecardwrapperitem">✏️ Higher order Thinking skills</li>
                            <li className="herocoursecardwrapperitem">✏️ Strong mathematical foundation</li>
                            <li className="herocoursecardwrapperitem">✏️ Analytical Thinking skills</li>
                        </ol>
                        <div className="herocoursecardwrapperbutton">Explore curriculum</div>
                    </div>
                    <div className="herocoursecardwrapper">
                        <div className="herocoursecardwrappertitle">Communcation Mastery</div>
                        <p className="herocoursecardwrapperdesc">Your child could be a great speaker</p>
                        <ol className="herocoursecardwrapperlist">
                            <li className="herocoursecardwrapperitem">✏️ Confident speaking skills</li>
                            <li className="herocoursecardwrapperitem">✏️ Correct Punctuation </li>
                            <li className="herocoursecardwrapperitem">✏️ In-Depth Phonics</li>
                            <li className="herocoursecardwrapperitem">✏️ Accurate Grammar</li>
                            <li className="herocoursecardwrapperitem">✏️ Active Listening </li>
                        </ol>
                        <div className="herocoursecardwrapperbutton">Explore curriculum</div>
                    </div>
                </div>
            </div>
    )
}

export default Homecoursecard;