import React from 'react';
import ReactDOM  from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button'
import classes from './CartModal.module.css'

const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onConfirm} />
  }

  const ModalOverlay = (props) => {
      return(
        <Card className={classes.modal}>
            <div className={classes.content}>
                <p>Cart!!!</p>
            </div>
            <Button>Ok</Button>
        </Card>
      )
  }

const CartModal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop/>,
                document.getElementById('backdrop-root')
            )}
        </React.Fragment>
    )
}

export default CartModal;