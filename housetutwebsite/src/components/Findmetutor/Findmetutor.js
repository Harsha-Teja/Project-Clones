import React from "react"
import {Link} from "react-router-dom";
import "./Findmetutor.css"
import Hero from "../HomeHero/Hero"
import subject from "../../Assets/svg/SubjectsSvg/subject.svg"

function Findmetutor (){
    return (
        <div>
            <Hero title={"Explore the best tutors from our platform"} text={"Note that the development build is not optimized. To createa \
                                                                          production build, use npm run build.Note that the development \
                                                                          build is not optimized. To create a production build, use npm run\
                                                                        build."}
                                                                        />
            
                < Cards />
            
        </div>
    )
}

export default Findmetutor

function Cards () {
    return (
        <>
        <div className="findmetutors-title"> Subjects </div>
        <div className="findmetutors-container">
                {/* Card component 1*/}
                <Link to="/tutorprofile">
                <div className="findmetutors-card">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </div>
                </Link>    
                {/* Card component 2*/}
                <Link to="/tutorprofile">
                <div className="findmetutors-card">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </div>
                </Link>  
                {/* Card component 3*/}
                <div className="findmetutors-card">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </div>
                {/* Card component 4*/}
                <Link to="/tutorprofile">
                <div className="findmetutors-card">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </div>
                </Link>  
                {/* Card component 5*/}
                <Link to="/tutorprofile">
                <div className="findmetutors-card">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </div>
                </Link>  
                {/* Card component 6*/}
                <Link to="/tutorprofile">
                <div className="findmetutors-card">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </div>
                </Link>  
                {/* Card component 7*/}
                <Link to="/tutorprofile">
                <div className="findmetutors-card">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </div>
                </Link>  
                {/* Card component 8*/}
                <Link to="/tutorprofile">
                <div className="findmetutors-card">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </div>
                </Link>  
            </div>
        </>
        
    )
}

/* Card component Sample
            // <div className="findmetutors-card">
            //     <div className="findmetutors-card-img">
            //         <img src= {subject} alt=" subject " className="card-img"/>
            //     </div>
            //     <div className="findmetutors-card-title">
            //         Science
            //     </div>
            //     <div className="findmetutors-card-text">
            //         Note that the development build is not optimized.
            //         To create a production build, use npm run build.
            //     </div>  
            // </div> */