import React from "react"
import "./Home.css"
import Hero from "../HomeHero/Hero"
import ReverseHero from "../HomeHero/ReverseHero"
import heroillustration from "../../Assets/svg/hero-illustration-two.svg";
import MiddleHero from "../HomeMiddleHero/MiddleHero"
import HomeWhyComponent from "../HomeWhyComponent/HomeWhyComponent"
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
            <ReverseHero ReverseHeroImage= {heroillustration} ReverseHeroTitle="We hand pick the perfect tutor for you" ReverseHeroText="Note that the development build is not optimized.
                            To create a production build, use npm run build.Note that the development build is not optimized.
                            To create a production build, use npm run build." ReverseHeroButton1="Find a Tutor" ReverseHeroButton2="Become Tutor"/>
            <MiddleHero />
            <HomeWhyComponent />
            <DemoForm />
        </div>
    )
}

export default Home;
