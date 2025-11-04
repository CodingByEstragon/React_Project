import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  return (
    <div className="empty-cart">
      <div className="emoji">☹️</div>
      <h1>
        Dein Warenkorb ist<br />leer.
      </h1>
      <Link to="/shop" className="shop-button">
        Weiter shoppen
      </Link>
    </div>
  );
}

export default Cart;
