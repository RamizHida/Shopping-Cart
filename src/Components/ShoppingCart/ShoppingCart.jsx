/* eslint-disable react/prop-types */
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from './ShoppingCart.module.css';
import './ShoppingCart.module.css';
import cartIcon from '../../assests/cartIcon.png';

function removeDuplicates(arr) {
  const unqiueArr = [];
  for (let item of arr) {
    if (!unqiueArr.includes(item)) {
      unqiueArr.push(item);
    } else continue;
  }
  return unqiueArr;
}

function emptyCart(cart) {
  if (cart.length === 0) return true;
}

function countOccurences(item, arr) {
  let occurences = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) occurences++;
  }

  return occurences;
}

// shopping limit
const limit = 20000;

function reloadApp() {
  setTimeout(() => location.replace('/'), 2000);
}

function ShoppingCart({ cart, setCart }) {
  const [warning, setWarning] = useState(false);
  const closeModal = () => setWarning(false);

  if (emptyCart(cart)) {
    return <h1 className={styles.empty}>No items selected </h1>;
  }

  if (cart.reduce((acc, item) => acc + item.price, 0) > limit) {
    return (
      <h1>
        That is enough shopping for now, this app will automatically reload
        {reloadApp()}
      </h1>
    );
  }

  return (
    <>
      <div className={styles.cart}>
        <img src={cartIcon} />
        <h2>Current items in cart</h2>
        <ul>
          {
            // Prevent display of duplicate items
            removeDuplicates(cart).map((item) => (
              <li key={item.id}>
                {item.title.slice(0, 20) + '...'} : Quantity :{' '}
                {countOccurences(item, cart)}
                <button
                  className={styles.delete__button}
                  onClick={() => {
                    setCart((prevCart) =>
                      prevCart.filter((product) => product != item)
                    );
                  }}
                >
                  Remove Product
                </button>
              </li>
            ))
          }
        </ul>
        <h1>Number of items: {cart.length}</h1>
        <h1>
          Total Cost:{' '}
          {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}$
        </h1>
      </div>
      <div>
        <button
          type="button"
          className={styles.clear__button}
          onClick={() => {
            setWarning((o) => !o);
          }}
        >
          Clear Entire Cart
        </button>
        <Popup open={warning} closeOnDocumentClick onClose={closeModal}>
          <div className="modal popupp">
            <a className="close" onClick={closeModal}>
              &times;
            </a>
            <h1 className={styles.warning}>Are you sure?</h1>
            <div className={styles.d}>
              <button
                className={styles.delete__cart__yes}
                onClick={() => {
                  setCart([]);
                  closeModal();
                }}
              >
                Yes
              </button>
              <button className={styles.delete__cart__no} onClick={closeModal}>
                No
              </button>
            </div>
          </div>
        </Popup>
      </div>
    </>
  );
}

export default ShoppingCart;
