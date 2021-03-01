import React from "react"
import TutorList from "../../TutorsList.json"
import image from "../../Assets/svg/TutorsSvg/ladysitting.svg";
import "./TutorProfileDetail.css"

// Emojicons: 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 ✒️ ✏️ ▶️ ✅ ⟹ ⇨ 

function TutorProfileDetail (props){
    console.log("[props]",props);
    const {match} = props;

    return (
    <>
        {TutorList.TutorList.map((TutorList) => { 
            if(match.params.TutorProfileTitleName === TutorList.id )
                return ( 
                    <div className="tutorprofiledetail">
                        <div className="tutorprofiledetailone">
                            <img src={image} alt="tutor profile pic" className="tutorprofiledetailoneimage"/>
                            <div className="tutorprofiledetailone1">
                                <div className="tutorprofiledetailone1name">{TutorList.name}</div> 
                                    <div className="tutorprofiledetailone1subject">
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[0]} </div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[1]}</div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[2]}</div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[3]}</div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[4]}</div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[5]}</div>    
                                    </div>
                                <button className="tutorprofiledetailone1button">BOOK FREE DEMO</button>
                        </div>
                        </div>
                        {/* Second Part View */}
                        <div className="tutorprofiledetailsecond"> 
                            <div className="tutorprofiledetailsecondhead1"> Overview </div>
                            <hr/>
                            <div className="tutorprofiledetailsecondtext1">
                                {TutorList.TutorProfileOverview}
                            </div>
                            <div className="tutorprofiledetailsecondhead2">Years of Experience </div>
                            <hr/>
                            <div className="tutorprofiledetailsecondtext2">
                                <ul>
                                    <li>⟹ {TutorList.TutorProfileYOE[0]} </li>
                                    <li>⟹ {TutorList.TutorProfileYOE[1]}</li>
                                    <li>⟹ {TutorList.TutorProfileYOE[2]}</li>
                                    <li>⟹ {TutorList.TutorProfileYOE[3]}</li>
                                </ul>
                            </div>
                            <div className="tutorprofiledetailsecondhead3"> Education </div>
                            <hr/>
                            <div className="tutorprofiledetailsecondtext3">
                                <li>📜 {TutorList.TutorProfileEducation[0]}</li>
                                <li>📜 {TutorList.TutorProfileEducation[1]}</li>
                                <li>📜 {TutorList.TutorProfileEducation[2]}</li>
                            </div>
                            <div className="tutorprofiledetailsecondhead4"> Verified Info </div>
                            <hr/>
                            <div className="tutorprofiledetailsecondtext4">
                                <li>✅ {TutorList.TutorProfileVerified[0]}</li>
                                <li>✅ {TutorList.TutorProfileVerified[1]}</li>
                                <li>✅ {TutorList.TutorProfileVerified[2]}</li>
                            </div>
                            <div className="tutorprofiledetailsecondhead5"> Accolades </div>
                            <hr/>
                            <div className="tutorprofiledetailsecondtext5">
                                <li>🏆 {TutorList.TutorProfileAccolades[0]}</li>
                                <li>🏆 {TutorList.TutorProfileAccolades[1]}</li>
                                <li>🏆 {TutorList.TutorProfileAccolades[2]}</li>
                            </div>
                        </div>
                    </div>
                )
                }
            )
        }
    </>
    )
}

export default TutorProfileDetail





// The inital version
// <div className="tutorprofiledetail">
//             <div className="tutorprofiledetailbg"></div>
//                 {/* First part of profile view */}
//                 <div className="tutorprofiledetailone">
//                     <img src={image} alt="tutor profile pic" className="tutorprofiledetailoneimage"/>
//                     <div className="tutorprofiledetailone1">
//                         <div className="tutorprofiledetailone1name">Harsha</div>
//                         <div className="tutorprofiledetailone1subject">
//                         <div className="tutorprofiledetailone1subjectdiv">Science</div>
//                         <div className="tutorprofiledetailone1subjectdiv">Maths</div>
//                         <div className="tutorprofiledetailone1subjectdiv">English</div>
//                         <div className="tutorprofiledetailone1subjectdiv">Hindi</div>
//                         <div className="tutorprofiledetailone1subjectdiv">GRE</div>
//                         <div className="tutorprofiledetailone1subjectdiv">GMAT</div>    
//                         </div>
//                         <button className="tutorprofiledetailone1button">BOOK FREE DEMO</button>
//                     </div>
//                 </div>
//                 {/* Second part of profile view */}
//                 <div className="tutorprofiledetailsecond"> 
//                     <div className="tutorprofiledetailsecondhead1"> Overview </div>
//                     <hr/>
//                     <div className="tutorprofiledetailsecondtext1">
//                         Note that the development build is not optimized.
//                         To create a production build, use npm run build.Note that the development build is not optimized.
//                         To create a production build, use npm run build.
//                     </div>
//                     <div className="tutorprofiledetailsecondhead2"> Years of Experience </div>
//                     <hr/>
//                     <div className="tutorprofiledetailsecondtext2">
//                         <ul>
//                             <li>⟹ 5 years in primary teahcing </li>
//                             <li>⟹ 4 years in a private tution center </li>
//                             <li>⟹ 2 years in online teaching</li>
//                             <li>⟹ 1 year in one-one personal coaching on GRE / GMAT</li>
//                         </ul>
//                     </div>
//                     <div className="tutorprofiledetailsecondhead3"> Education </div>
//                     <hr/>
//                     <div className="tutorprofiledetailsecondtext3">
//                         <li>📜 B.Ed from Osmania University</li>
//                         <li>📜 Inter from Chaitanya college</li>
//                         <li>📜 Schooling from Kendriya Vidyalaya</li>
//                     </div>
//                     <div className="tutorprofiledetailsecondhead4"> Verified Info </div>
//                     <hr/>
//                     <div className="tutorprofiledetailsecondtext4">
//                         <li>✅ Background Verification on Id Proofs</li>
//                         <li>✅ Background Verification on Educational Degrees</li>
//                         <li>✅ Passed Skill Assessments</li>
//                     </div>
//                     <div className="tutorprofiledetailsecondhead5"> Accolades </div>
//                     <hr/>
//                     <div className="tutorprofiledetailsecondtext5">
//                         <li>🏆 Runner up in Indian Nation Teachers Award</li>
//                         <li>🏆 Special Teacher award from Telagana State</li>
//                         <li>🏆 Supper Innovator Award from Teacherr</li>
//                     </div>
//                 </div>
//             </div>




// The map version
// {TutorList.TutorList.map((TutorList) => {
//     return ( 
//         <div className="tutorprofiledetail">
//         <div className="tutorprofiledetailbg"></div>
//             <div className="tutorprofiledetailone">
//                 <img src={image} alt="tutor profile pic" className="tutorprofiledetailoneimage"/>
//                 <div className="tutorprofiledetailone1">
//                     <div className="tutorprofiledetailone1name">{TutorList.name} </div>
//                     <div className="tutorprofiledetailone1subject">
//                     <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[0]} </div>
//                     <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[1]}</div>
//                     <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[2]}</div>
//                     <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[3]}</div>
//                     <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[4]}</div>
//                     <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[5]}</div>    
//                     </div>
//                     <button className="tutorprofiledetailone1button">BOOK FREE DEMO</button>
//                 </div>
//             </div>
//             <div className="tutorprofiledetailsecond"> 
//                 <div className="tutorprofiledetailsecondhead1"> Overview </div>
//                 <hr/>
//                 <div className="tutorprofiledetailsecondtext1">
//                     {TutorList.TutorProfileOverview}
//                 </div>
//                 <div className="tutorprofiledetailsecondhead2">Years of Experience </div>
//                 <hr/>
//                 <div className="tutorprofiledetailsecondtext2">
//                     <ul>
//                         <li>⟹ {TutorList.TutorProfileYOE[0]} </li>
//                         <li>⟹ {TutorList.TutorProfileYOE[1]}</li>
//                         <li>⟹ {TutorList.TutorProfileYOE[2]}</li>
//                         <li>⟹ {TutorList.TutorProfileYOE[3]}</li>
//                     </ul>
//                 </div>
//                 <div className="tutorprofiledetailsecondhead3"> Education </div>
//                 <hr/>
//                 <div className="tutorprofiledetailsecondtext3">
//                     <li>📜 {TutorList.TutorProfileEducation[0]}</li>
//                     <li>📜 {TutorList.TutorProfileEducation[1]}</li>
//                     <li>📜 {TutorList.TutorProfileEducation[2]}</li>
//                 </div>
//                 <div className="tutorprofiledetailsecondhead4"> Verified Info </div>
//                 <hr/>
//                 <div className="tutorprofiledetailsecondtext4">
//                     <li>✅ {TutorList.TutorProfileVerified[0]}</li>
//                     <li>✅ {TutorList.TutorProfileVerified[1]}</li>
//                     <li>✅ {TutorList.TutorProfileVerified[2]}</li>
//                 </div>
//                 <div className="tutorprofiledetailsecondhead5"> Accolades </div>
//                 <hr/>
//                 <div className="tutorprofiledetailsecondtext5">
//                     <li>🏆 {TutorList.TutorProfileAccolades[0]}</li>
//                     <li>🏆 {TutorList.TutorProfileAccolades[1]}</li>
//                     <li>🏆 {TutorList.TutorProfileAccolades[2]}</li>
//                 </div>
//             </div>
//         </div>
//      )})}