import React from "react"
import "./Findmetutor.css"
import Hero from "../HomeHero/Hero"
import subject from "../../Assets/svg/subject.svg"

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
            {/* Card component */}
            <div className="findmetutors-card">
                <div className="findmetutors-card-img">
                    <img src= {subject} alt=" subject " className="card-img"/>
                </div>
                <div className="findmetutors-card-title">
                    Science
                </div>
                <div className="findmetutors-card-text">
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>  
            </div>
            {/*  */}
            <div className="findmetutors-card">
                <div className="findmetutors-card-img">
                    <img src= {subject} alt=" subject " className="card-img"/>
                </div>
                <div className="findmetutors-card-title">
                    Science
                </div>
                <div className="findmetutors-card-text">
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>  
            </div>
            {/*  */}
            <div className="findmetutors-card">
                <div className="findmetutors-card-img">
                    <img src= {subject} alt=" subject " className="card-img"/>
                </div>
                <div className="findmetutors-card-title">
                    Science
                </div>
                <div className="findmetutors-card-text">
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>  
            </div>
            {/*  */}
            <div className="findmetutors-card">
                <div className="findmetutors-card-img">
                    <img src= {subject} alt=" subject " className="card-img"/>
                </div>
                <div className="findmetutors-card-title">
                    Science
                </div>
                <div className="findmetutors-card-text">
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>  
            </div>
            {/*  */}
            <div className="findmetutors-card">
                <div className="findmetutors-card-img">
                    <img src= {subject} alt=" subject " className="card-img"/>
                </div>
                <div className="findmetutors-card-title">
                    Science
                </div>
                <div className="findmetutors-card-text">
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>  
            </div>
            {/*  */}
            <div className="findmetutors-card">
                <div className="findmetutors-card-img">
                    <img src= {subject} alt=" subject " className="card-img"/>
                </div>
                <div className="findmetutors-card-title">
                    Science
                </div>
                <div className="findmetutors-card-text">
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>  
            </div>
            {/*  */}
            <div className="findmetutors-card">
                <div className="findmetutors-card-img">
                    <img src= {subject} alt=" subject " className="card-img"/>
                </div>
                <div className="findmetutors-card-title">
                    Science
                </div>
                <div className="findmetutors-card-text">
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>  
            </div>

        </div>
        
        </>
        
    )
}