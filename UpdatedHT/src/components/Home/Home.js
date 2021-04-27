import React from "react"
import "./Home.css"
import Hero from "../HomeHero/Hero"
import Homecenter from "../HomeHero/Homecenter"
import Homeapproach from "../HomeHero/Homeapproach"
import MiddleHero from "../HomeMiddleHero/MiddleHero"
import HomeWhyComponent from "../HomeWhyComponent/HomeWhyComponent"
import DemoForm from "./DemoForm";


function Home(){
    return(
        <div>
            <Hero   title1={"Personalized."} 
                    title2={"Focussed."} 
                    title3={"One on One Learning."} 
                    text={"Specilist Tutors for k-12 and Beyond"}
                    button1 ={"Book a Free Trial"}
                    herolast={"*Limited Seats"}/>
            <Homecenter />
            <Homeapproach />
            <MiddleHero />
            <HomeWhyComponent />
            <DemoForm />
        </div>
    )
}

export default Home;
