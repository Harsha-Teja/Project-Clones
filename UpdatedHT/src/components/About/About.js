import React from "react"
import "./About.css"
import ReverseHero from "../HomeHero/ReverseHero"
import heroillustration from "../../Assets/svg/hero-illustration-two.svg"
import aboutpic from "../../Assets/images/group.jpg"
import whattarget from "../../Assets/images/target.jpg"
import aboutwhat from "../../Assets/images/aboutwhat.jpg"
import ContactForm from "../ContactForm/ContactForm"



function About () {
    return (
        <>
        <ReverseHero   
                    title1={"About Us"} 
                    title2={"Bringing 21st Century Education to your Home"} 
                    heroimage={heroillustration}
                    />
        {/* About us part */}
        <div className="aboutuswhocontainer">
            <div className="aboutuswhocontainer1">
                <div className="aboutuswhocontainer1box1">
                    <p className="aboutuswhocontainer1box1text">Who <stron className="logocolor">are</stron> we?</p>
                </div>
                <div className="aboutuswhocontainer1box2">
                    <p className="aboutuswhocontainer1box2text">HouseTutoring is a pioneering, mathematical thinking and confident speaking platform for children. We use interactive games in a small classroom to create a rich and engaging learning environment children</p>
                </div>
            </div>
            <div className="aboutuswhocontainer2">
                <img src={aboutpic} alt="group" className="aboutuswhocontainer2img"/>
            </div>
        </div>
        {/* What do we do */}
        <div className="aboutuswhocontainer">
            <div className="aboutuswhocontainer1">
                <div className="aboutuswhocontainer1box1">
                    <p className="aboutuswhocontainer1box1text">What <stron className="logocolor">do we</stron> do?</p>
                </div>
                <div className="aboutuswhocontainer1box2">
                    <p className="aboutuswhocontainer1box2text">HouseTutoring is a mission-driven organization, not money-driven. We are here to provide the best education at the most affordable prices in the comfort of your home.</p>
                </div>
            </div>
            <div className="aboutuswhocontainer2">
                <img src={aboutwhat} alt="what" className="aboutuswhocontainer2img"/>
            </div>
        </div>
        {/* Our Mission */}
        <div className="hero">
        <div className="hero-illustration">
            <img src={whattarget} alt="Teacher teaching illustration"/>
        </div>
        <div className="hero-content">
            <div className="hero-content-container">
                <div className="hero-content-title"> Our <stron className="logocolor">Mission</stron></div>
                <div className="hero-content-text">Stimulate children's interest in learning, promote the development of personalized education and give children the ability to benefit for a lifetime</div>
            </div>
        </div>
        </div>
        {/* Impact */}
        <div className="aboutimpactcontainer">
            <div className="aboutimpactcontainertitle">
                <p className="aboutimpactcontainertitletext">Impact</p>
            </div>
            <div className="aboutimpactcontainerstat">
                <div className="aboutimpactcontainerstat1">
                    <p className="aboutimpactcontainerstat1stat">
                        50,000+
                    </p>
                    <p className="aboutimpactcontainerstat1text">
                        Live Classes
                    </p>
                </div>
                <div className="aboutimpactcontainerstat1">
                    <p className="aboutimpactcontainerstat1stat">
                        20,000+
                    </p>
                    <p className="aboutimpactcontainerstat1text">
                        Students
                    </p>
                </div>
                <div className="aboutimpactcontainerstat1">
                    <p className="aboutimpactcontainerstat1stat">
                        10,000+
                    </p>
                    <p className="aboutimpactcontainerstat1text">
                        Qualified Teachers
                    </p>
                </div>
            </div>
        </div>
        {/* Contactform */}
        <div className="aboutcontactform">
            <div className="aboutcontactformtext">
                <p>Let's connect and explore more opportunities</p>
            </div>
            <ContactForm />
        </div>
        </> 
    )
}

export default About