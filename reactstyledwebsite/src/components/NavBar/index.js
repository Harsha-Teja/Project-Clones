import React from "react";
import { Bar, Nav, NavIcon, NavLink } from "./NavBarElements";

function NavBar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to="/" > Pizza </NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bar />
                </NavIcon>
            </Nav>  
        </>
    )   
}

export default NavBar;