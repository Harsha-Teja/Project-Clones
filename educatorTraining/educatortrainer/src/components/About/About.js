import React from "react";
import "./About.css";
import nsrcel from "../../assets/nsrcellogo.png";
import edstart from "../../assets/awsedstartlogo.png";
import ContactForm from "../ContactForm/ContactForm";
import support from "../../assets/svg/support.svg";
import collab from "../../assets/svg/collab.svg";
import teacherr from "../../assets/teacherr.png";
import {Accordion, Card, Button} from "react-bootstrap";
import "../HomeMiddleHero/MiddleHero.css"



function About () {
    return (
        <>
        {/* About us part */}
            <div className="cards-howitworks">
                {/* First column */}
                <div className="cards-firstcolumn">
                    <div className="cards-firstcolumn-title">
                        A few things about us
                    </div>
                    <div className="cards-firstcolumn-header">
                        at the core of our business, impact is what drives us!!!
                    </div>
                    <div className="cards-firstcolumn-text"> 
                        Note that the development build is not optimized.
                        To create a production build, use npm run build.
                        Note that the development build is not optimized.
                        To create a production build, use npm run build.
                    </div>
                </div>
                {/* Second column */}
                <div className="cards-secondcolumn">
                    <div className="cards-cardscontainer">
                    <div className="cards-container">
                    <i className="far fa-clipboard cards-cardicon"></i>
                        <div className="cards-cardtitle">
                            Mission
                        </div>
                        <div className="cards-cardtext">
                            Note that the development build is not optimized.
                            To create a production build, use npm run build.
                        </div>
                    </div>
                    </div>
                    <div className="cards-cardscontainer">
                    <div className="cards-container">
                    <i className="far fa-clipboard cards-cardicon"></i>
                        <div className="cards-cardtitle">
                            Vision
                        </div>
                        <div className="cards-cardtext">
                            Note that the development build is not optimized.
                            To create a production build, use npm run build.
                        </div>
                    </div>
                    </div>
                </div>
                {/* Third column */}
                <div className="cards-thirdcolumn">
                    <div className="cards-cardscontainer">
                    <div className="cards-container">
                    <i className="far fa-clipboard cards-cardicon"></i>
                        <div className="cards-cardtitle">
                            Impact
                        </div>
                        <div className="cards-cardtext">
                            Note that the development build is not optimized.
                            To create a production build, use npm run build.
                        </div>
                    </div>
                    </div>
                    <div className="cards-cardscontainer">
                    <div className="cards-container">
                    <i className="far fa-clipboard cards-cardicon"></i>
                        <div className="cards-cardtitle">
                            Our Moto
                        </div>
                        <div className="cards-cardtext">
                            Note that the development build is not optimized.
                            To create a production build, use npm run build.
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        {/* Some of our backers  */}
        <div className="support">
        <div className="supportpic">
            <img src={support} alt="supporters" className="supportimgone"/>
        </div>
        <div className="oursupports">
            <div className="oursupportstitle"> Our Supporters </div>
            <div className="oursupportslogos">
                <div className="oursupportslogo">
                    <img src={nsrcel} alt="nsrcel logo" className="supportimg"/>
                    <h6> NSRCEL (IIMB Accelerator)</h6>
                </div>
                <div className="oursupportslogo">
                    <img src={edstart} alt="AWS Edtech Startups" className="supportimg"/>
                    <h6> AWS Edtech Startups</h6>
                </div>
            </div>
        </div>
        </div>

        {/* In collaboration */}
        <div className="collab">
        <div className="collabtwo">
            <div className="collabtitle"> In Collaboration with </div>
            <div className="collablogo">
                    <img src={teacherr} alt="nsrcel logo" className="collabteacherrlogo"/>
                    <h6><a href="www.teacherr.in" className="teacherr"> Teacherr </a></h6>
            </div>
        </div>
        <div className="collabpic">
            <img src={collab} alt="collaboration" className="collabimgone" />
        </div>
        </div>
        
        {/* FAQ section here */}
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
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Does it charge money ?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                <Card.Body>Yes, it does money. The money depends on the type of course you select!</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    Does it charge money ?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                <Card.Body>Yes, it does money. The money depends on the type of course you select!</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                    Does it charge money ?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                <Card.Body>Yes, it does money. The money depends on the type of course you select!</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                    Does it charge money ?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                <Card.Body>Yes, it does money. The money depends on the type of course you select!</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="8">
                    Does it charge money ?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                <Card.Body>Yes, it does money. The money depends on the type of course you select!</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="9">
                    Does it charge money ?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                <Card.Body>Yes, it does money. The money depends on the type of course you select!</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

        {/* Contact us form here */}
        <ContactForm />
        </> 
    )
}

export default About