import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
// import { useDispatch } from "react-redux";

function CheckoutProduct({cartIndex, id, image, title, price, rating, hideButton }) {
    const [{ cart }, dispatch ] = useStateValue();
    
    const removeFromCart = () => {
        // remove the item from the cart
        // const dispatch = useDispatch();
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
    };
    
    return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <snall>$</snall>
                <strong>{price}</strong>
            </p>

            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>
            {!hideButton && (
                <button onClick={removeFromCart}>Remove from Cart</button>
            )}

            
        </div>
    </div>
  )
}

export default CheckoutProduct