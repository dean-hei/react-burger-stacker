import React from 'react';
import Ingredients from './Ingredients';

function IngredientList(props) {

    return (
        <div class="list">
            <h2>BurgerStack3000</h2>
            <h3 class="italic">Today's Menu:</h3>
            <ul>
                {props.ingredients.map(ingred => {
                    return (<Ingredients ingredient={ingred} addIngred={props.addIngred} />)
                })}
            </ul>
            <h3>Your Total: ${props.totalPrice}</h3>
        </div>
    )
}

export default IngredientList;