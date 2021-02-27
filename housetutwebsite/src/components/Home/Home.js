import React from "react"
import "./Home.css"
import Hero from "../HomeHero/Hero"
import ReverseHero from "../HomeHero/ReverseHero"
import MiddleHero from "../HomeMiddleHero/MiddleHero"
import WhyComponent from "../WhyComponent/WhyComponent"

function Home(){
    return(
        <div>
            <Hero />
            <ReverseHero />
            <MiddleHero />
            <WhyComponent />
            <DemoForm />
        </div>
    )
}

export default Home;

function DemoForm (){
    return (
        <div>
            hello
        </div>
    )
}