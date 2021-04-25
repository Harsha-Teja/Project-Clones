import React from "react"
import image from "../../assets/svg/subject.svg";
import ReactPlayer from "react-player"
import "./Experttutors.css"
import CarouselContainerTestimonials from "../Carousle/Carousletwo"
import {Accordion, Card, Button} from "react-bootstrap";

// Emojicons: 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 ✒️ ✏️ ▶️ ✅ ⟹ ⇨ 

function TutorProfileDetail (props){
    return (
    <>
        <div className="tutorprofiledetail">
            <div className="tutorprofiledetailone">
                <img src={image} alt="tutor profile pic" className="tutorprofiledetailoneimage"/>
                <div className="tutorprofiledetailone1">
                    <div className="tutorprofiledetailone1name">Random subject</div> 
                        {/* <div className="tutorprofiledetailone1subject">
                        <div className="tutorprofiledetailone1subjectdiv">Random </div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>    
                        </div> */}
                    <div> <a href='https://pmny.in/WI3JFlmI0VtM' className="payu"> Register Now!!! </a> </div>
            </div>
            </div>

            {/* Second Part View */}

            <div className="tutorprofiledetailsecond"> 
                <div className="tutorprofiledetailsecondhead1"> Course Overview </div>
                {/* <hr/> */}
                <div className="tutorprofiledetailsecondtext1">
                    Random description about the curriculum of the course
                </div>

                <div className="tutorprofiledetailsecondhead3"> Job Prospects </div>
                {/* <hr/> */}

                <div className="tutorprofiledetailsecondtext3">
                    <li>📜 Random</li>
                    <li>📜 Random</li>
                    <li>📜 Random</li>
                </div>

                <div className="tutorprofiledetailsecondhead4"> Faculty details </div>
                {/* <hr/> */}

                <div className="tutorprofiledetailsecondtext4">
                    <li className="programdownnavbarli">
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Harsha</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                    </li>
                    <li className="programdownnavbarli">
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Varun</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                    </li>
                    <li className="programdownnavbarli">
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Sonu</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                    </li>
                </div>

                <div className="tutorprofiledetailsecondhead5"> The course content </div>
                {/* <hr/> */}

                <div className="tutorprofiledetailsecondtext5">
                    <ul className="coursecontent">
                    <li className="coursecontentcol"> 
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                    </li>
                    <li className="coursecontentcol"> 
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                    </li>
                    </ul>
                </div>
                
                {/* <hr/> */}
                <div className="tutorprofiledetailsecondhead5"> Demo Videos </div>

                <div className="tutorprofiledetailsecondvideo">
                <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                </div>

                <div className="tutorprofiledetailsecondhead2">Eligibility and Course Fee </div>
                {/* <hr/> */}
                <div className="tutorprofiledetailsecondtext2">
                    <ul>
                        <li>⟹ Random </li>
                        <li>⟹ Random</li>
                        <li>⟹ Random</li>
                        <li>⟹ Random</li>
                    </ul>
                </div>
                <CarouselContainerTestimonials 
                contentfirst="To create a production build, use npm run build.Note that the development build is not optimized." 
                contentsecond="To create a production build, use npm run build.Note that the development build is not optimized."
                contentthird="To create a production build, use npm run build.Note that the development build is not optimized."
                contentfour="To create a production build, use npm run build.Note that the development build is not optimized."
                contentfive="To create a production build, use npm run build.Note that the development build is not optimized."
                contentsix="To create a production build, use npm run build.Note that the development build is not optimized."/>
                <Accordion defaultActiveKey="0" className="accordian">
                    <h1 className="aboutusfaq">FAQ's</h1>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="accordianquestion">
                            Why is teacherr in here?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>This is an initiatie by teacherr</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Does it charge money ?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Yes, it does money. The money depends on the type of course you select!</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Does it charge money ?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Yes, it does money. The money depends on the type of course you select!</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Does it charge money ?
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>Yes, it does money. The money depends on the type of course you select!</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    )
)
    </>
    )
}

export default TutorProfileDetail

