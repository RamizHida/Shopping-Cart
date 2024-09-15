/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import Warper from './Warper';

function removeDuplicates(arr) {
  const unqiueArr = [];
  for (let item of arr) {
    if (!unqiueArr.includes(item)) {
      unqiueArr.push(item);
    } else continue;
  }
  return unqiueArr;
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

  console.log(cart, 'from shopping cart');
  return (
    <>
      <h2>Current items in cart</h2>
      <ul>
        {
          // Prevent display of duplicate items
          removeDuplicates(cart).map((item) => (
            <li key={item.itemID}>
              {item.description} : x{countOccurences(item, cart)}
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
      <h1>Total Cost: {cart.reduce((acc, item) => acc + item.price, 0)} </h1>
      <br />
      <br />
      {/* <button
        onClick={() =>
          setWarning((o) => {
            !o;
          })
        }
      >
        Clear Entire Cart {console.log(warning)}
        {warning ?? <Modal warning={warning} />}
      </button> */}
      <div>
        <button
          type="button"
          className="button"
          onClick={() => setWarning((o) => !o)}
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
