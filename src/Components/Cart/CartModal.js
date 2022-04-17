import React from 'react';
import ReactDOM  from 'react-dom';
import { createPortal } from 'react-dom';
import { CountContext} from '../Home/Home'


import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'
// import classes from './CartModal.css'
import './CartModal.css'
  

const CartModal = ({ isVisible, hideModal, currentCart }) => {
  
  
  return isVisible
  ? createPortal(
      <Card className="modal-card">
        <div>
          <h5>Your Cart</h5>
            {currentCart.map((cartItem, i) => {
              return<div key={i}>
                <ul className='cartModalItem' key={i}>
                  <div className='cartModalItem-info' >

                    <li>{cartItem.name}</li>
                    <li>{cartItem.price}</li>
                    <li>{cartItem.description}</li>
                  </div>
                </ul>
              </div>
            })}
            <h5>Total:{currentCart.reduce((acc, {price}) => parseFloat(acc) + parseFloat(price), 0).toFixed(2)} </h5>
        </div>
        <button onClick={hideModal}>
          Close
        </button>
      </Card>,
      document.body,
    )
  : null;

};
  export default CartModal;

  