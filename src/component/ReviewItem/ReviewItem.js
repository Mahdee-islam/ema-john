import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, key } = props.product;
    const {handleRemove } = props;
    return (
        <div className = "product">
            <div>
            <h4 className = "name"> { name } </h4>
            <p>Price: { price } </p>
            <p> { quantity } </p>
            <button onClick = { ()=> handleRemove(key)} className = "regular-btn">Remove Item</button>
            </div>

        </div>
    );
};

export default ReviewItem;