import React from "react"
import "./Home.css"
import ReverseHero from "../HomeHero/ReverseHero"
import heroillustration from "../../assets/svg/HomeHero.svg";
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
            <ReverseHero ReverseHeroImage= {heroillustration} ReverseHeroTitle="Get trained under the best teachers" ReverseHeroText="Note that the development build is not optimized.
                            To create a production build, use npm run build.Note that the development build is not optimized.
                            To create a production build, use npm run build." ReverseHeroButton1="Book a Class"/>
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
