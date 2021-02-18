import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import { Button } from "./button";
function Navbar(){

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    
    function handleClick () {
        setClick(!click)
    }

    function closeMobileMenu(){
        setClick(false)
    }

    function showButton(){
        if ( window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(()=> showButton, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                    Travel <i className="fab fa-typo3" onClick={closeMobileMenu}/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick="closeMobileMenu"> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/service" className="nav-link" onClick="closeMobileMenu"> Service </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link" onClick="closeMobileMenu"> Products </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link-mobile" onClick="closeMobileMenu"> SignUp </Link>
                        </li>
                    </ul>
                    {button && <Button buttonShape='btn--outline'> SIGN UP </Button>}
                </div>
            </nav>  
        </>
    )
}

export default Navbar 