/* eslint-disable react/prop-types */
import items from '../../items';
import ItemCard from '../ItemCard/ItemCard';
import styles from './ShoppingPage.module.css';
function ShoppingPage({ cart, setCart }) {
  console.log(cart);

  return (
    <>
      <h1>Choose from these items</h1>
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
    </>
  );
}

export default ShoppingPage;
