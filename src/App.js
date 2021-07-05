import React from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import {useState} from 'react'
import CartProvider from './Store/CartProvider';



function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () =>{

     cartIsShown?  setCartIsShown(false): setCartIsShown(true);
  }

  return (
   <CartProvider>
     {cartIsShown && <Cart onClose={showCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
    <Meals />
      </main>
   </CartProvider>
  );
}

export default App;
