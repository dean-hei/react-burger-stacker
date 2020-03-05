import React, {useState} from 'react';
import { checkPropTypes} from "prop-types";

function Ingredients(props) {
    let ingredsList = props.ingredients.map((item) => {
        return (<li>{item.name}, ${item.price} 
            <button value={item.color + " " + item.price} onClick={(e) => props.addIngred(e)}>Add</button>
        </li>);
    })

    return (
        <ul>
            {ingredsList}
        </ul>
    )
}

export default Ingredients;