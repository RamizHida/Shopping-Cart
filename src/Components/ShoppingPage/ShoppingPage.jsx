/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
// import items from '../../items';
import ItemCard from '../ItemCard/ItemCard';
import styles from './ShoppingPage.module.css';
import { Link } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

function truncate(str, n) {
  return str.length > n ? str.slice(0, n - 1) + '...' : str;
}

function ShoppingPage() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics?limit=7')
      .then((res) => res.json())
      .then((res) => {
        console.log([...res]);
        return setItems([...res]);
      });
  }, []);

  if (items.length === 0) {
    return <h1>Loading...</h1>;
  }

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
              title={item.title}
              description={truncate(item.description, 70)}
              price={item.price}
              key={item.id}
              imgUrl={item.image}
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
