import ShoppingPage from './Components/ShoppingPage/ShoppingPage';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <ShoppingPage cart={cart} setCart={setCart} />
      <ShoppingCart cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
