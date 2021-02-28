import React from "react"
import "./Home.css"
import Hero from "../HomeHero/Hero"
import ReverseHero from "../HomeHero/ReverseHero"
import MiddleHero from "../HomeMiddleHero/MiddleHero"
import WhyComponent from "../WhyComponent/WhyComponent"
import DemoForm from "../DemoForm/DemoForm"


function Home(){
    return(
        <div>
            <Hero title={"We hand pick the perfect tutor for you"} text={"Note that the development build is not optimized. To createa \
                                                                          production build, use npm run build.Note that the development \
                                                                          build is not optimized. To create a production build, use npm run\
                                                                        build."}
                                                                        button1 ={"Find a Tutor"}
                                                                        button2={"Become Tutor"}
                                                                        />
            <ReverseHero />
            <MiddleHero />
            <WhyComponent />
            <DemoForm />
        </div>
    )
}

export default Home;
