import React from "react"
import Hero from "../HomeHero/Hero"
import ReverseHero from "../HomeHero/ReverseHero"
import heroillustration from "../../Assets/svg/hero-illustration-two.svg"
import "./BecomeTutor.css"


function Becometutor () {
    return (
    <>
        <Hero title=" We help YOU educators to upskill your self and also earm along side" 
              text="earch for the keywords to learn more about each warning.
                    To ignore, add // eslint-disable-next-line to the line before." />
                    {/* Middle part of why HouseTutoring */}
        <div className="becometutormiddle">
            <div className="becometutormiddlewhypart">
                <div className="becometutormiddlewhytitle"> Why choose <span>HouseTutoring</span></div>
                <div className="becometutormiddlewhybar">
                    <div className="becometutormiddlewhybarcard">
                        <div className="becometutormiddlewhybarcardimg"><i className="fab fa-linkedin icons"/></div>
                        <div>
                        <div className="becometutormiddlewhybarcardtitle"> In your control</div>
                        <div className="becometutormiddlewhybarcardtext"> earch for the keywords to learn more about each warning.
                              To ignore, add // eslint-disable-next-line to the line before.</div>
                        </div>
                    </div>
                    <div className="becometutormiddlewhybarcard">
                        <div className="becometutormiddlewhybarcardimg"><i className="fab fa-linkedin icons"/></div>
                        <div>
                        <div className="becometutormiddlewhybarcardtitle"> In your control</div>
                        <div className="becometutormiddlewhybarcardtext"> earch for the keywords to learn more about each warning.
                              To ignore, add // eslint-disable-next-line to the line before.</div>
                        </div>
                    </div>
                    <div className="becometutormiddlewhybarcard">
                        <div className="becometutormiddlewhybarcardimg"><i className="fab fa-linkedin icons"/></div>
                        <div>
                        <div className="becometutormiddlewhybarcardtitle"> In your control</div>
                        <div className="becometutormiddlewhybarcardtext"> earch for the keywords to learn more about each warning.
                              To ignore, add // eslint-disable-next-line to the line before.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Step to get into HouseTutoring */}
            <div className="joinbecometutor">
                <div className="joinbecometutortitle"> How it works </div>
                <div className="joinbecometutorheader"> Join HouseTutoring in 4 Steps</div>
                <div className="joinbecometutortext">Search for the keywords to learn more about each warning.
                        To ignore, add // eslint-disable-next-line to the line before.earch for the keywords to learn more about each warning.
                        To ignore, add // eslint-disable-next-line to the line before.earch for the keywords to learn more about each warning.
                        To ignore, add // eslint-disable-next-line to the line before.</div>
            </div>
            <Hero title=" We help YOU educators to upskill your self and also earm along side" 
                text="earch for the keywords to learn more about each warning.
                        To ignore, add // eslint-disable-next-line to the line before." />
            <ReverseHero ReverseHeroImage= {heroillustration} ReverseHeroTitle="We hand pick the perfect tutor for you" ReverseHeroText="Note that the development build is not optimized.
                                To create a production build, use npm run build.Note that the development build is not optimized.
                                To create a production build, use npm run build." />
            <Hero title=" We help YOU educators to upskill your self and also earm along side" 
                text="earch for the keywords to learn more about each warning.
                        To ignore, add // eslint-disable-next-line to the line before." /> 
            <ReverseHero ReverseHeroImage= {heroillustration} ReverseHeroTitle="We hand pick the perfect tutor for you" ReverseHeroText="Note that the development build is not optimized.
                                To create a production build, use npm run build.Note that the development build is not optimized.
                                To create a production build, use npm run build."/>
        {/* Become a Tutor form here */}
    </>
    )
}

export default Becometutor