import React, {useState} from 'react';
import { checkPropTypes} from "prop-types";

function MyIngredients(props) {
    let myIngredsList = props.ingredients.map((item) => {
        let divStyle = {
            background: item,
            color: "white"
        }
        return (<div class="ingred" style={divStyle}>
            <h2>~ ~ ~ ~ ~ ~ ~ ~</h2>
        </div>);
    })

    return (
        <div>
            {myIngredsList}
        </div>
    )
}

export default MyIngredients;