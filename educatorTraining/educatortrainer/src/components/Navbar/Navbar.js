import {NavLink} from "react-router-dom";
import React,{useState} from "react";
import "./Navbar.css";


function Navbar () {
    const [isOpen, setIsOpen] = useState(false)

    return (
       <div>
           <nav className="navbar">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="logoname">
               {/* <img src={HouseTutoring} alt="Housetutoring logo" className="logo"/> */}
               <h1 className="logo" >Educator Trainers</h1>
            </NavLink>
               <ul className="nav-links" style={{transform: isOpen ? "translateX(0px)" : ""}} >
                   {/* Home */}
                    <li className="navbarli">
                    <NavLink 
                        exact={true}
                        to="/" 
                        className="nav-link" 
                        onClick={() => setIsOpen(false)}
                        activeStyle={{
                            borderBottom: "2px solid #d4101c",
                            }}
                        >
                        Home
                    </NavLink>
                    </li>
                    {/* Programs */}
                    <li className="navbarli">
                    <NavLink to="/Programs" className="nav-link" onClick={() => setIsOpen(false)} activeStyle={{
                            borderBottom: "2px solid #d4101c",
                            }}>
                        Programs
                    </NavLink>
                    </li>
                    {/* About Us */}
                    <li className="navbarli">
                    <NavLink to="about" className="nav-link" onClick={() => setIsOpen(false)} activeStyle={{
                            borderBottom: "2px solid #d4101c",
                            }}>
                        About Us
                    </NavLink>
                    </li>
                    <div className="button" onClick={() => setIsOpen(false)}>
                        <div className="button-text1"> <a href="https://teacherr.in" style={{
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
