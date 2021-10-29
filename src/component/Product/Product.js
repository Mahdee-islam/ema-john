import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {img, name, price, seller, stock,  } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className = "product">
            <img src= {img} alt="" />
            <div className="product-detail">
                <h3> { name }</h3>
                <p> <small> by: { seller} </small></p>
                <p> ${ price } </p>
                <p> <small> Only {stock} left-order now</small></p>
                <button onClick = { () => props.addHandleToCart(props.product) } className="regular-btn"> { cartIcon } add to cart </button>
            </div>
        </div>
    );
};

export default Product;