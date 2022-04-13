import React from 'react';
import ReactDOM  from 'react';
import { createPortal} from 'react-dom'

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

const CartModal = ({ isVisible, hideModal }) => {
  
    return isVisible
      ? createPortal(
          <div>
                <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={hideModal}/>,
         document.getElementById('backdrop-root')
      )};
      {ReactDOM.createPortal(
        <ModalOverlay title='Cart Modal' message='cart message' />,
         document.getElementById('overlay-root'))}
    </React.Fragment>
          </div>,
          document.body,
        )
      : null;
  };
  export default CartModal;