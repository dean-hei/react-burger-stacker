import React, {useState} from 'react';
import { checkPropTypes} from "prop-types";

function Ingredients(props) {
    let ingredsList = props.ingredients.map((item) => {
        return (<li>{item.name}
            <button value={item.color} onClick={(e) => props.addIngred(e)}>Add this Ingredient</button>
        </li>);
    })

    return (
        <ul>
            {ingredsList}
        </ul>
    )
}

export default Ingredients;