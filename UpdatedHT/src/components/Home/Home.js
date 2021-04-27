import React from "react"
import "./Home.css"
import Hero from "../HomeHero/Hero"
import Homecenter from "../HomeHero/Homecenter"
import Homeapproach from "../HomeHero/Homeapproach"
import Homecoursecard from "../HomeHero/Homecoursecard"
import Homecourseprice from "../HomeHero/Homecourseprice"
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
            <Homecoursecard />
            <Homecourseprice />
            <DemoForm />
        </div>
    )
}

export default Home;
