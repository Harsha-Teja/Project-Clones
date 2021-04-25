import React from "react"
import "./Programs.css"
import Hero from "../HomeHero/Hero"
import heroillustration from "../../assets/svg/Teaching.svg";
import DemoForm from "../Home/DemoForm";
import Programdropdown from "./Programdropdown"


function Programs(){
    return(
        <div>
            <Hero Hero= {heroillustration} title="Choose the programs and learn them from our best of the industry faculty" text="Note that the development build is not optimized.
                            To create a production build, use npm run build.Note that the development build is not optimized.
                            To create a production build, use npm run build."/>
            <Programdropdown />
            <DemoForm />
        </div>
    )
}

export default Programs;
