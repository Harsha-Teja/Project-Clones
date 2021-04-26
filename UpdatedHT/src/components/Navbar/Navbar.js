import {NavLink} from "react-router-dom";
import React,{useState} from "react";
import "./Navbar.css";
import HouseTutoring from "../../Assets/images/HouseTutoring.png";


function Navbar () {
    const [isOpen, setIsOpen] = useState(false)

    return (
       <div>
           <nav className="navbar">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
               <img src={HouseTutoring} alt="Housetutoring logo" className="logo"/>
            </NavLink>
               <ul className="nav-links" style={{transform: isOpen ? "translateX(0px)" : ""}} >
                    <li className="navbarli">
                    <NavLink 
                        exact={true}
                        to="/" 
                        className="nav-link" 
                        onClick={() => setIsOpen(false)}
                        activeStyle={{
                            borderBottom: "2px solid green",
                            }}
                        >
                        Home
                    </NavLink>
                    </li>
                    <li className="navbarli">
                    <NavLink to="/findmetutor" className="nav-link" onClick={() => setIsOpen(false)} activeStyle={{
                            borderBottom: "2px solid green",
                            }}>
                        Find me Tutor
                    </NavLink>
                    </li>
                    <li className="navbarli">
                    <NavLink to="/becometutor" className="nav-link" onClick={() => setIsOpen(false)} activeStyle={{
                            borderBottom: "2px solid green",
                            }}>
                        Become Tutor
                    </NavLink>
                    </li>
                    <li className="navbarli">
                    <NavLink to="about" className="nav-link" onClick={() => setIsOpen(false)} activeStyle={{
                            borderBottom: "2px solid green",
                            }}>
                        About Us
                    </NavLink>
                    </li>
                    <div className="button" onClick={() => setIsOpen(false)}>
                        <div className="button-text"> BOOK FREE DEMO</div>
                    </div>
                    <div className="button" onClick={() => setIsOpen(false)}>
                        <div className="button-text1"> <a href="#" style={{
                            textDecoration:"none",
                            color: "white"
                            }} >Login</a></div>
                    </div>
               </ul>
               <i onClick={()=>setIsOpen(!isOpen)} className="fas fa-bars burger"></i>
               
           </nav>

       </div>
    )
}

export default Navbar
