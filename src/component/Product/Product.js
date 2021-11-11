import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {img, name, price, seller, stock, star  } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className = "product">
            <img src= {img} alt="" />
            <div className="product-detail">
                <h3> { name }</h3>
                <p> <small> by: { seller} </small></p>
                <p> ${ price } </p>
                <p> <small> Only {stock} left-order now</small></p>
                <Rating
                initialRating = { star }
                emptySymbol = "far fa-star rating"
                fullSymbol = "fas fa-star rating"
                readonly
                />
                <br />
                <button onClick = { () => props.addHandleToCart(props.product) } className="regular-btn"> { cartIcon } add to cart </button>
            </div>
        </div>
    );
};

export default Product;