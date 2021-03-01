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
                <ReverseHero ReverseHeroImage={heroillustration} ReverseHeroTitle="Find most skilled tutors from our platform" 
                            ReverseHeroText="We have a repeat() function which will help us to not write 1fr 1fr 1fr three times rather 
                                                we can write repeat(3, 1fr) simply.
                                                We have two main functions called auto-fit and auto-fill."/>
            </div>
            <div className="tutorprofile-title"> Tutor's Profile </div>
            <div className="tutorprofile-cards-container">
            
                {  TutorList.TutorList.map((TutorList) => {
                    console.log("[Tutori Prfoile]",TutorList.id);
                    return (

                    <Link to={`/tutorprofile/${TutorList.id}`} key={TutorList.id}>
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



            /* <Card  TutorProfileImage={image} 
                   TutorProfileTitleName="harsha" 
                   TutorProfileTitleSubject="Science" 
                   TutorProfileList1="5 years experience" 
                   TutorProfileList2="M.ed Degree Holder" 
                   TutorProfileList3="National Award Winner" 
                   TutorProfileList4="Trained 4000+ students"/>
            <Card  TutorProfileImage={image} 
                   TutorProfileTitleName="Varun" 
                   TutorProfileTitleSubject="Maths" 
                   TutorProfileList1="5 years experience" 
                   TutorProfileList2="M.ed Degree Holder" 
                   TutorProfileList3="National Award Winner" 
                   TutorProfileList4="Trained 4000+ students"/>
            <Card  TutorProfileImage={image} 
                   TutorProfileTitleName="Harshit" 
                   TutorProfileTitleSubject="Hindi" 
                   TutorProfileList1="5 years experience" 
                   TutorProfileList2="M.ed Degree Holder" 
                   TutorProfileList3="National Award Winner" 
                   TutorProfileList4="Trained 4000+ students"/>
            <Card  TutorProfileImage={image} 
                   TutorProfileTitleName="Yogi" 
                   TutorProfileTitleSubject="Yoga"
                   TutorProfileList1="5 years experience" 
                   TutorProfileList2="M.ed Degree Holder" 
                   TutorProfileList3="National Award Winner" 
                   TutorProfileList4="Trained 4000+ students"/>
            <Card  TutorProfileImage={image} 
                   TutorProfileTitleName="Ram" 
                   TutorProfileTitleSubject="English" 
                   TutorProfileList1="5 years experience" 
                   TutorProfileList2="M.ed Degree Holder" 
                   TutorProfileList3="National Award Winner" 
                   TutorProfileList4="Trained 4000+ students"/> */