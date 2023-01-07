import Meals from './components/Meals/Meals';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartHandler = () => {
      setShowCart((prevState) => {
        return !prevState
      })
  }
  return (
    <CartProvider>
      {showCart && <Cart onClose={showCartHandler}/> }
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
