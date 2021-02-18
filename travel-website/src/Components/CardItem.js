import React from "react"
import {Link} from "react-router-dom"

function CardItem (props){
    return (
        <>
            <li className="card__item">
                <Link className="cards_item_list" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel Image"
                            className="cards__item_img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__name"> {props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;