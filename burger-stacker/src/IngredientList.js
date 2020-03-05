import React, {useState} from 'react';
import { checkPropTypes} from "prop-types";
import Ingredients from './Ingredients';

function IngredientList(props) {

    return (
        <div class="list">
            <Ingredients ingredients={props.ingredients} addIngred={props.addIngred}/>
        </div>
    )
}

export default IngredientList;