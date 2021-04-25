import React from "react"
import "./Programs.css"
import Hero from "../HomeHero/Hero"
import heroillustration from "../../assets/svg/hero-illustration-two.svg";
import DemoForm from "../Home/DemoForm";
import Programdropdown from "./Programdropdown"


function Programs(){
    return(
        <div>
            <Hero Hero= {heroillustration} title="We hand pick the perfect tutor for you" text="Note that the development build is not optimized.
                            To create a production build, use npm run build.Note that the development build is not optimized.
                            To create a production build, use npm run build."/>
            <Programdropdown />
            <DemoForm />
        </div>
    )
}

export default Programs;
