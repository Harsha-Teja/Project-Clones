import React from "react"
import "./MiddleHero.css"


function MiddleHero (){
    return (
        <div className="cards-howitworks">
            {/* First column */}
            <div className="cards-firstcolumn">
                <div className="cards-firstcolumn-title">
                    How it works
                </div>
                <div className="cards-firstcolumn-header">
                    Find your tutors in 20 seconds
                </div>
                <div className="cards-firstcolumn-text"> 
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                </div>
                {/* <div className="class-firstcolumn-button">
                    <button className="class-firstcolumn-button-1">Read More</button>
                </div> */}
            </div>
            {/* Second column */}
            <div className="cards-secondcolumn">
                <div className="cards-cardscontainer">
                <div className="cards-container">
                <i className="far fa-clipboard cards-cardicon"></i>
                    <div className="cards-cardtitle">
                        1 Write Enquiry
                    </div>
                    <div className="cards-cardtext">
                        Note that the development build is not optimized.
                        To create a production build, use npm run build.
                    </div>
                </div>
                </div>
                <div className="cards-cardscontainer">
                <div className="cards-container">
                <i className="far fa-clipboard cards-cardicon"></i>
                    <div className="cards-cardtitle">
                        2 Get a call - attend the program
                    </div>
                    <div className="cards-cardtext">
                        Note that the development build is not optimized.
                        To create a production build, use npm run build.
                    </div>
                </div>
                </div>
            </div>
            {/* Third column */}
            <div className="cards-thirdcolumn">
                <div className="cards-cardscontainer">
                <div className="cards-container">
                <i className="far fa-clipboard cards-cardicon"></i>
                    <div className="cards-cardtitle">
                        3 Complete program - Get Placed
                    </div>
                    <div className="cards-cardtext">
                        Note that the development build is not optimized.
                        To create a production build, use npm run build.
                    </div>
                </div>
                </div>
                {/* <div className="cards-cardscontainer">
                <div className="cards-container">
                <i className="far fa-clipboard cards-cardicon"></i>
                    <div className="cards-cardtitle">
                        1 Profiling
                    </div>
                    <div className="cards-cardtext">
                        Note that the development build is not optimized.
                        To create a production build, use npm run build.
                    </div>
                </div>
                </div> */}
            </div>
        </div>
    )
}

export default MiddleHero