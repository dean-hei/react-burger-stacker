import React, {useState} from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import './App.css';


function App() {
  const ingredients = [        
    {name: 'Kaiser Bun', price: 2, color: 'saddlebrown', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Kaisersemmel-.jpg/500px-Kaisersemmel-.jpg'},
    {name: 'Sesame Bun', price: 2, color: 'sandybrown', img: 'http://www.projetoweb.inf.br/clientes/bomgosto01/wp-content/uploads/2012/03/HSSB1.jpg'},
    {name: 'Gluten Free Bun', price: 5, color: 'peru', img: 'https://glutenfreehomemaker.com/wp-content/uploads/2009/03/Gluten-Free-Hamburger-Buns.jpg'},
    {name: 'Lettuce Wrap', price: 2, color: 'olivedrab', img: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Iceberg_lettuce_in_SB.jpg'},
    {name: 'Beef Patty', price: 1, color: '#3F250B', img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Hamburger_patty.jpg'},
    {name: 'Soy Patty', price: 7, color: '#3F250B', img: 'https://img-global.cpcdn.com/recipes/4645215039127552/1502x1064cq70/macrobiotic-soybean-hamburger-patties-recipe-main-photo.webp'},
    {name: 'Black Bean Patty', price: 6, color: '#3F250B', img: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers.jpg'},
    {name: 'Chicken Patty', price: 2, color: 'burlywood', img: 'https://littlesunnykitchen.com/wp-content/uploads/Air-Fryer-chicken-breast-recipe-13.jpg'},
    {name: 'Lettuce', price: 1, color: 'lawngreen', img: 'https://thewhiskingkitchen.com/wp-content/uploads/2018/10/salad-3502149_1280-1.jpg'},
    {name: 'Tomato', price: 1, color: 'tomato', img: 'https://www.grotecompany.com/portals/0/Images/slicers/grote-produce-tomato.jpg'},
    {name: 'Bacon', price: 2, color: 'maroon', img: 'https://www.simplyrecipes.com/wp-content/uploads/2019/08/baked-bacon-Lead-1.jpg'},
    {name: 'Onion', price: 1, color: 'lightyellow', img: 'https://gfjules.com/wp-content/uploads/2015/01/onion-slices-scaled.jpg'}
  ];

  let [myIngreds, setMyIngreds] = useState([]);

  let [totalPrice, setTotalPrice] = useState(0);

  const addIngred = (ingredient) => {
    console.log("Adding", ingredient.name);
    setMyIngreds([ingredient, ...myIngreds]);
    setTotalPrice(totalPrice + ingredient.price);
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
