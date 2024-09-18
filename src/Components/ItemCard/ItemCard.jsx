/* eslint-disable react/prop-types */
import styles from './ItemCard.module.css';

const ItemCard = ({ title, description, price, imgUrl, addToCart }) => {
  return (
    <>
      <div className={styles.outer__container}>
        <div className={styles.container}>
          <h2>Title: {title}</h2>
          <p>Description: {description}</p>
          <p>Price: {price}$</p>
          <img src={imgUrl} className={styles.item__image} />
          <button onClick={addToCart} className={styles.add_button}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
