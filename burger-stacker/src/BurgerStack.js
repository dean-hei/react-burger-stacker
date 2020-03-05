import React, {useState} from 'react';
import {checkPropTypes} from "prop-types";
import MyIngredients from "./MyIngredients";

function BurgerStack(props) {
    return (
        <div>
            <MyIngredients ingredients={props.ingredients}/>
        </div>
    );
}

export default BurgerStack;