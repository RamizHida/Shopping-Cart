/* eslint-disable react/prop-types */
import styles from './ItemCard.module.css';

const ItemCard = ({ description, quantity, price, addToCart }) => {
  return (
    <>
      <div className={styles.outer__container}>
        <div className={styles.container}>
          <h2>{description}</h2>
          <p>How many:{quantity}</p>
          <p>How much: {price}$</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
