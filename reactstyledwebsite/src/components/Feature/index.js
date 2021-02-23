import React from "react"
import {FeatureContainer, FeatureButton} from "./FeatureElements"

function Feature(){
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>This is a good pizza to try</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature;