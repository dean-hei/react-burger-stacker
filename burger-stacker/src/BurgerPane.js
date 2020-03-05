import React, {useState} from 'react';
import { checkPropTypes} from "prop-types";
import BurgerStack from "./BurgerStack";
import ClearBurger from "./ClearBurger";

function BurgerPane(props) {

    return (
        <div class="burgerpane">
            <BurgerStack ingredients={props.ingredients} />
            <ClearBurger clearBurger={props.clearBurger}/>
        </div>
    )
}

export default BurgerPane;