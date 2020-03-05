import React, {useState} from 'react';
import { checkPropTypes } from "prop-types";
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import './App.css';


function App() {
  let [ingredients, setIngredients] = useState([        
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]);

  let [myIngreds, setMyIngreds] = useState([]);

  const addIngred = (e) => {
    console.log(e.target.value);
    setMyIngreds([...myIngreds, e.target.value]);
  }

  const clearBurger = () => {
    setMyIngreds([]);
  }
  return (
    <div class="wrapper">
      <IngredientList ingredients={ingredients} addIngred={addIngred}/>
      <BurgerPane ingredients={myIngreds} clearBurger={clearBurger}/>
    </div>
  );
}

export default App;
