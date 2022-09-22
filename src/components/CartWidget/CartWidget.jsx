import React from 'react'
import { Cart } from 'react-bootstrap-icons';
import '../CartWidget/CartWidget.css';

export const CartWidget = () => {
  return (
    <a className='cart-icon-button' role="button" href='#'>
        <Cart className="icon-cart" />
        <span className='badge rounded-pill badge-counter bg-danger icon-total'>1</span>
    </a>
  )
}
