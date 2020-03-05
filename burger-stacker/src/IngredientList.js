import React, {useState} from 'react';
import { checkPropTypes} from "prop-types";
import Ingredients from './Ingredients';

function IngredientList(props) {

    return (
        <div class="list">
            <h2>BurgerStack3000</h2>
            <h3 class="italic">Today's Menu:</h3>
            <Ingredients ingredients={props.ingredients} addIngred={props.addIngred}/>
            <h3>Your Total: ${props.totalPrice}</h3>
        </div>
    )
}

export default IngredientList;