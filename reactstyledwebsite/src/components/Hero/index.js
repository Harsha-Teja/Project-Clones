import React, {useState} from "react";
import {HeroContainer, HeroContent, HeroH1, HeroItem, HeroBtn, HeroP} from "./HeroElements";
import NavBar from "../NavBar/index"
import Sidebar from "../Sidebar";

function Hero () {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <NavBar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItem>
                    <HeroH1>
                        Greatest Pizza Ever
                    </HeroH1>
                    <HeroP>
                        Ready in 60m
                    </HeroP>
                    <HeroBtn>
                        Click here
                    </HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;