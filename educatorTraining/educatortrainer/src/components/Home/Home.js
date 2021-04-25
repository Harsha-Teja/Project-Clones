import React from "react"
import "./Home.css"
import ReverseHero from "../HomeHero/ReverseHero"
import heroillustration from "../../assets/svg/hero-illustration-two.svg";
import MiddleHero from "../HomeMiddleHero/MiddleHero"
import HomeWhyComponent from "../HomeWhyComponent/HomeWhyComponent"
import Programscomponent from "../Programscomponent/Programscomponent"
import Trainerprofile from "../Programscomponent/Trainerprofile"
import CarouselContainerPlacements from "../Carousle/Carousle"
import CarouselContainerTestimonials from "../Carousle/Carousletwo"
import DemoForm from "./DemoForm";


function Home(){
    return(
        <div>
            <ReverseHero ReverseHeroImage= {heroillustration} ReverseHeroTitle="We hand pick the perfect tutor for you" ReverseHeroText="Note that the development build is not optimized.
                            To create a production build, use npm run build.Note that the development build is not optimized.
                            To create a production build, use npm run build." ReverseHeroButton1="Find a Tutor" ReverseHeroButton2="Become Tutor"/>
            <Programscomponent />
            <MiddleHero />
            <Trainerprofile />
            <HomeWhyComponent />
            <CarouselContainerTestimonials />
            <CarouselContainerPlacements />
            <DemoForm />
        </div>
    )
}

export default Home;
