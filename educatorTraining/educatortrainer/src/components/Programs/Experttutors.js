import React from "react"
import image from "../../assets/svg/TutorsSvg/ladysitting.svg";
import ReactPlayer from "react-player"
import "./Experttutors.css"

// Emojicons: 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 ✒️ ✏️ ▶️ ✅ ⟹ ⇨ 

function TutorProfileDetail (props){
    return (
    <>
        <div className="tutorprofiledetail">
            <div className="tutorprofiledetailone">
                <img src={image} alt="tutor profile pic" className="tutorprofiledetailoneimage"/>
                <div className="tutorprofiledetailone1">
                    <div className="tutorprofiledetailone1name">Random</div> 
                        <div className="tutorprofiledetailone1subject">
                        <div className="tutorprofiledetailone1subjectdiv">Random </div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>    
                        </div>
                    <button className="tutorprofiledetailone1button">BOOK FREE DEMO</button>
            </div>
            </div>

            {/* Second Part View */}

            <div className="tutorprofiledetailsecond"> 
                <div className="tutorprofiledetailsecondhead1"> Overview </div>
                {/* <hr/> */}
                <div className="tutorprofiledetailsecondtext1">
                    Random
                </div>
                
                <div className="tutorprofiledetailsecondhead2">Years of Experience </div>
                {/* <hr/> */}
                <div className="tutorprofiledetailsecondtext2">
                    <ul>
                        <li>⟹ Random </li>
                        <li>⟹ Random</li>
                        <li>⟹ Random</li>
                        <li>⟹ Random</li>
                    </ul>
                </div>

                <div className="tutorprofiledetailsecondhead3"> Education </div>
                {/* <hr/> */}

                <div className="tutorprofiledetailsecondtext3">
                    <li>📜 Random</li>
                    <li>📜 Random</li>
                    <li>📜 Random</li>
                </div>

                <div className="tutorprofiledetailsecondhead4"> Verified Info </div>
                {/* <hr/> */}

                <div className="tutorprofiledetailsecondtext4">
                    <li>✅ Random</li>
                    <li>✅ Random</li>
                    <li>✅ Random</li>
                </div>

                <div className="tutorprofiledetailsecondhead5"> Accolades </div>
                {/* <hr/> */}

                <div className="tutorprofiledetailsecondtext5">
                    <li>🏆 Random</li>
                    <li>🏆 Random</li>
                    <li>🏆 Random</li>
                </div>

                {/* <hr/> */}
                <div className="tutorprofiledetailsecondhead5"> Demo Videos </div>

                <div className="tutorprofiledetailsecondvideo">
                <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                </div>
            </div>
        </div>
    )
)
    </>
    )
}

export default TutorProfileDetail

