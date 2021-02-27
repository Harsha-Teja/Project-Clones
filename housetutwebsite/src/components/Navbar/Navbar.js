import {Link} from "react-router-dom";
import React,{useState} from "react";
import "./Navbar.css";
import HouseTutoring from "../../Assets/images/HouseTutoring.png";


function Navbar () {
    const [isOpen, setIsOpen] = useState(false)

    return (
       <div>
           <nav className="navbar">
               <img src={HouseTutoring} alt="Housetutoring logo" className="logo"/>
               <ul className="nav-links" style={{transform: isOpen ? "translateX(0px)" : ""}}>
                    <li>
                    <Link path="/home" className="nav-link" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link path="/findmetutor" className="nav-link" onClick={() => setIsOpen(false)}>
                        Find me Tutor
                    </Link>
                    </li>
                    <li>
                    <Link path="/becometutor" className="nav-link" onClick={() => setIsOpen(false)}>
                        Become Tutor
                    </Link>
                    </li>
                    <li>
                    <Link path="aboutus" className="nav-link" onClick={() => setIsOpen(false)}>
                        About Us
                    </Link>
                    </li>
                    <div className="button" onClick={() => setIsOpen(false)}>
                        <div className="button-text"> BOOK FREE DEMO</div>
                    </div>
               </ul>
               <i onClick={()=>setIsOpen(!isOpen)} className="fas fa-bars burger"></i>
               
           </nav>

       </div>
    )
}

export default Navbar
