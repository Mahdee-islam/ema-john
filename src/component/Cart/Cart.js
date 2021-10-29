import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart ) {
        total = total + product.price;
    }
    return (
        <div>
            <div className="center">
            <h3>Order Summary</h3>
            <p>Item Ordered : { cart.length } </p>
            </div>
            <p>Total: { total } </p>
        </div>
    );
};

export default Cart;