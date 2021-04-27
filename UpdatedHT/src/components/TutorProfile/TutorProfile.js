import React from "react"
import "./TutorProfile.css"
import ReverseHero from "../HomeHero/ReverseHero"
import heroillustration from "../../Assets/svg/hero-illustration.svg"
import image from "../../Assets/svg/SubjectsSvg/subject.svg"
import TutorList from "../../TutorsList.json"
import {Link} from "react-router-dom"

function TutorProfile(){
    return (
        <>
            <div>
            <ReverseHero   
                    title1={"Look at our super educators from across the globe"} 
                    text={"Our educators are one of the best in the field and have many accolades from many prestigious organisations"} 
                    heroimage={heroillustration}
                    />
            </div>
            <div className="fulltutorprofile">
            <div className="tutorprofile-title"> Tutor's Profile </div>
            <div className="tutorprofile-cards-container">
            
                {  TutorList.TutorList.map((TutorList) => {
                    console.log("[Tutori Prfoile]",TutorList.id);
                    return (

                    <Link to={`/tutorprofile/${TutorList.id}`} key={TutorList.id} className="tutorprofilelink">
                    <Card
                    {...TutorList}
                    TutorProfileImage={image}
                    TutorProfileTitleName={TutorList.name}
                    TutorProfileTitleSubject={TutorList.subject[0]} />
                    </Link>
                    )
                })
                }
            </div>
            </div>
        </>
    )
}

export default TutorProfile

function Card ({TutorProfileImage, TutorProfileTitleName, TutorProfileTitleSubject, TutorProfileList1, TutorProfileList2, TutorProfileList3, TutorProfileList4}){
    return (
        <>
            {/* <Link to={`/tutorprofile/${TutorProfileTitleName}`}> */}
                <div className="tutorprofile-card">
                    <div className="tutorprofile-card-imgcontainer">
                        <img src= {TutorProfileImage} alt=" subject " className="tutorprofile-card-img"/>
                    </div>
                    <div className="tutorprofile-card-title-name">
                        {TutorProfileTitleName}
                    </div>
                    <div className="tutorprofile-card-title-subject">
                        {TutorProfileTitleSubject}
                    </div>
                    <div className="tutorprofile-card-text">
                        <ul>
                            <li className="tutorprofile-listnames"><i className="fab fa-youtube icons"/>{TutorProfileList1}</li>
                            <li className="tutorprofile-listnames"><i className="fab fa-youtube icons"/>{TutorProfileList2}</li>
                            <li className="tutorprofile-listnames"><i className="fab fa-youtube icons"/>{TutorProfileList3}</li>
                            <li className="tutorprofile-listnames"><i className="fab fa-youtube icons"/>{TutorProfileList4}</li>
                        </ul>
                    </div>  
                </div>
            {/* </Link> */}
        </>
    )
}