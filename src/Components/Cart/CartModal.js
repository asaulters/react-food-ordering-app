import React from 'react';
import ReactDOM  from 'react-dom';
import { createPortal } from 'react-dom';


import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'
import classes from './CartModal.module.css'

const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onConfirm} />
  }
  
  const ModalOverlay = (props) =>{  
    return (
      <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>

      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.hideModal}>Okay</Button>
      </footer>
    </Card> 
    )
  }
  
//   const ErrorModal = (props) => {
//     return (
//       <React.Fragment>
//         {ReactDOM.createPortal(
//           <Backdrop onConfirm={props.onConfirm}/>,
//            document.getElementById('backdrop-root')
//         )};
//         {ReactDOM.createPortal(
//           <ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
//            document.getElementById('overlay-root'))}
//       </React.Fragment>
//     );
//   };

// export default CartModal;

const CartModal = ({ isVisible, hideModal, props }) => {
  
  return isVisible
  ? createPortal(
      <div>
        <div>
          <h5>Your Cart</h5>
          <span>
            {props.cart}
          </span>
        </div>
        <button onClick={hideModal}>
          Close
        </button>
      </div>,
      document.body,
    )
  : null;

};
  export default CartModal;