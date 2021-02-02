import React from 'react';
function Ingredients(props) {


    return (
        <li>{props.ingredient.name}, ${props.ingredient.price} 
            <button onClick={() => props.addIngred(props.ingredient)}>Add</button>
        </li>
    )
}

export default Ingredients;