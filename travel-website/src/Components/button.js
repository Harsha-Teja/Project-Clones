import React from "react";
import "./button.css";
import {Link} from "react-router-dom";

const STYLES = ['btn--primary', 'btn-outline', 'btn-test']
const Sizes = ['btn--medium', 'btn-large']

export const Button = ({
    Children,
     type,
     onClick,
     buttonSize,
     buttonShape
    }) => {
        const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : Sizes[0]

        const checkButtonShape = STYLES.includes(buttonShape) ? buttonShape : STYLES[0]

        return (
            <Link to="/sign-up" className="btn-mobile">
            <Button
            className =" btn ${checkButtonShape} ${checkButtonSize}"
            type={type}
            onClick={onClick}
            >
                {Children}
            </Button>
            </Link>
        )
    }
