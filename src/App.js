import React from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {useState} from 'react'



function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () =>{

     cartIsShown?  setCartIsShown(false): setCartIsShown(true);
  }

  return (
   <React.Fragment>
     {cartIsShown && <Cart onClose={showCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
    <Meals />
      </main>
   </React.Fragment>
  );
}

export default App;
