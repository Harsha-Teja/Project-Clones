import React from "react"
import "./Programs.css"
import Hero from "../HomeHero/Hero"
import heroillustration from "../../assets/svg/personal.svg";
import Programdropdown from "./Programdropdown"
import ReverseHero from "../HomeHero/ReverseHero"
import PersonalForm from "./PersonalForm";


function Programs(){
    return(
        <div>
            <Hero Hero= {heroillustration} title="Choose the programs and learn them from our best of the industry faculty" text="Note that the development build is not optimized.
                            To create a production build, use npm run build.Note that the development build is not optimized.
                            To create a production build, use npm run build."/>
            <Programdropdown />
            <ReverseHero ReverseHeroImage= {heroillustration} ReverseHeroTitle="Let us help you shape your career with our experienced educators" ReverseHeroText="Note that the development build is not optimized.
                            To create a production build, use npm run build.Note that the development build is not optimized.
                            To create a production build, use npm run build."/>
            <PersonalForm />
        </div>
    )
}

export default Programs;
