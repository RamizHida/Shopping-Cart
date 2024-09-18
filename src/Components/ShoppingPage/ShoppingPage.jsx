/* eslint-disable react/prop-types */
import { useState } from 'react';
import items from '../../items';
import ItemCard from '../ItemCard/ItemCard';
import styles from './ShoppingPage.module.css';
import { Link } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

function ShoppingPage() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Shopping Page!</h1>
      <div className={styles.items__container}>
        {items.map((item) => {
          return (
            <ItemCard
              description={item.description}
              quantity={item.quantity}
              price={item.price}
              key={item.itemID}
              addToCart={() => {
                setCart((prevItems) => [...prevItems, item]);
              }}
            />
          );
        })}
      </div>
      <ShoppingCart cart={cart} setCart={setCart} />
    </>
  );
}

export default ShoppingPage;
