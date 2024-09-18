/* eslint-disable react/prop-types */
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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

function ShoppingCart({ cart, setCart }) {
  const [warning, setWarning] = useState(false);
  const closeModal = () => setWarning(false);

  if (emptyCart(cart)) {
    return <h1>No items selected </h1>;
  }

  if (cart.reduce((acc, item) => acc + item.price, 0) > 20000) {
    return (
      <h1>
        That is enough shopping for now, this app will automatically reload
        {setTimeout(() => location.replace('/'), 1000)}
      </h1>
    );
  }

  return (
    <>
      <h2>Current items in cart</h2>
      <ul>
        {
          // Prevent display of duplicate items
          removeDuplicates(cart).map((item) => (
            <li key={item.id}>
              {item.title.slice(0, 20) + '...'} : x{countOccurences(item, cart)}
              <button
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
      <h1>Total numbers of items: {cart.length}</h1>
      <h1>
        Total Cost:
        {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
      </h1>
      <br />
      <br />
      <div>
        <button
          type="button"
          className="button"
          onClick={() => {
            setWarning((o) => !o);
          }}
        >
          Clear Entire Cart
        </button>
        <Popup open={warning} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <a className="close" onClick={closeModal}>
              &times;
            </a>
            <h1>Are you sure?</h1>
            <button
              onClick={() => {
                setCart([]);
                closeModal();
              }}
            >
              Yes
            </button>
            <button onClick={closeModal}>No</button>
          </div>
        </Popup>
      </div>
    </>
  );
}

export default ShoppingCart;
