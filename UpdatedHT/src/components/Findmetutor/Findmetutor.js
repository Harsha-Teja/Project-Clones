import React from "react"
import {Link} from "react-router-dom";
import "./Findmetutor.css"
import ReverseHero from "../HomeHero/ReverseHero"
import subject from "../../Assets/svg/SubjectsSvg/subject.svg"

function Findmetutor (){
    return (
        <div>
            <ReverseHero   
                    title1={"Check out our extensive list of courses"} 
                    text={"We cover from architecture to zoology, if you don't find the course you want let us know we will add it soon"} 
                    heroimage={subject}
                    />
                < Cards />
            
        </div>
    )
}

export default Findmetutor

function Cards () {
    return (
        <>
        <div className="findmetutorentire">
        <div className="findmetutors-title"> Courses </div>
        <div className="findmetutors-container">
                {/* Card component 1*/}
                
                <div className="findmetutors-card">
                <Link to="/tutorprofile" className="findmetutorlink">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </Link>    
                </div>
                
                {/* Card component 2*/}
                <div className="findmetutors-card">
                <Link to="/tutorprofile" className="findmetutorlink">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </Link>    
                </div>

                {/* Card component 3*/}
                <div className="findmetutors-card">
                <Link to="/tutorprofile" className="findmetutorlink">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </Link>    
                </div>

                {/* Card component 4*/}
                <div className="findmetutors-card">
                <Link to="/tutorprofile" className="findmetutorlink">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </Link>    
                </div>

                {/* Card component 5*/}
                <div className="findmetutors-card">
                <Link to="/tutorprofile" className="findmetutorlink">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </Link>    
                </div>

                {/* Card component 6*/}
                <div className="findmetutors-card">
                <Link to="/tutorprofile" className="findmetutorlink">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </Link>    
                </div>

                {/* Card component 7*/}
                <div className="findmetutors-card">
                <Link to="/tutorprofile" className="findmetutorlink">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </Link>    
                </div>

                {/* Card component 8*/}
                <div className="findmetutors-card">
                <Link to="/tutorprofile" className="findmetutorlink">
                    <div className="findmetutors-card-img">
                        <img src= {subject} alt=" subject " className="card-img"/>
                    </div>
                    <div className="findmetutors-card-title">
                        Science
                    </div>  
                </Link>    
                </div>
                </div>
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