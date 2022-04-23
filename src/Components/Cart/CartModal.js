import React from 'react';
import ReactDOM  from 'react-dom';
import { createPortal } from 'react-dom';
import { CountContext} from '../Home/Home'


import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'
import classes from './CartModal.module.css'
// import styled, { css } from "styled-components";
// // import './CartModal.css'

// const ModalContainer = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(0, 0, 0, 0.5);
// `;
  

const CartModal = ({ isVisible, hideModal, currentCart, removeCartMealItem }) => {

  const checkKey = (e) => {
    console.log(this)
  }
  
  
  return isVisible
  ? createPortal(
      <Card className={classes.modal}>
      <div className={classes.modalBackground}>
        <div className={classes.modalDiv}>
          <div className={classes.modalHeader}>
            <h5 className={classes.modalHeaderH5}>Your Cart</h5>
            <button className={classes.modalHeaderX} onClick={hideModal}> X </button>
          </div>
          <div className={classes.modalBody}>          
              {currentCart.map((cartItem, i) => {
                return<div key={i}>
                  <ul className={classes.cartModalItem} key={i}>
                    <div className={classes.cartModalItemInfo} >

                      <li className={classes.cartModalName}>{cartItem.name}</li>
                      <li className={classes.cartModalPrice}>{cartItem.price}</li>
                      <li className={classes.cartModalDesc}>{cartItem.description}</li>
                      
                    </div>
                    <button className={classes.cartModalX} onClick={checkKey}>X</button>
                  </ul>
                </div>
              })}
              <h5 className={classes.modalTotal}>Total:{currentCart.reduce((acc, {price}) => parseFloat(acc) + parseFloat(price), 0).toFixed(2)} </h5>
          </div>
            <div className={classes.modalFooter}>
                <button className={classes.closeModalButton} onClick={hideModal}> Close </button>
                <button className={classes.orderModalButton}>Checkout</button>
            </div>
        </div>
      </div>
      </Card>,
      document.body,
    )
  : null;

};


  export default CartModal;

