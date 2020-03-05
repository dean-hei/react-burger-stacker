import React, {useState} from 'react';
import { checkPropTypes } from "prop-types";
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import './App.css';


function App() {
  let [ingredients, setIngredients] = useState([        
    {name: 'Kaiser Bun', price: 2, color: 'saddlebrown'},
    {name: 'Sesame Bun', price: 2, color: 'sandybrown'},
    {name: 'Gluten Free Bun', price: 5, color: 'peru'},
    {name: 'Lettuce Wrap', price: 2, color: 'olivedrab'},
    {name: 'Beef Patty', price: 1, color: '#3F250B'},
    {name: 'Soy Patty', price: 7, color: '#3F250B'},
    {name: 'Black Bean Patty', price: 6, color: '#3F250B'},
    {name: 'Chicken Patty', price: 2, color: 'burlywood'},
    {name: 'Lettuce', price: 1, color: 'lawngreen'},
    {name: 'Tomato', price: 1, color: 'tomato'},
    {name: 'Bacon', price: 2, color: 'maroon'},
    {name: 'Onion', price: 1, color: 'lightyellow'}
  ]);

  let [myIngreds, setMyIngreds] = useState([]);

  let [totalPrice, setTotalPrice] = useState(0);

  const addIngred = (e) => {
    console.log(e.target.value);
    setMyIngreds([e.target.value.split(" ")[0], ...myIngreds]);
    setTotalPrice(totalPrice + parseInt(e.target.value.split(" ")[1]));
  }

  const clearBurger = () => {
    setMyIngreds([]);
    setTotalPrice(0);
  }
  return (
    <div class="wrapper">
      <IngredientList ingredients={ingredients} addIngred={addIngred} 
        totalPrice={totalPrice}/>
      <BurgerPane ingredients={myIngreds} clearBurger={clearBurger}/>
    </div>
  );
}

export default App;
