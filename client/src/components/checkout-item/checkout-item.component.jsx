import React from 'react';

import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import {CheckoutItemContainer, ImageContainer, QuantityContainer, RemoveButtonContainer, TextContainer} from "./checkout-item.styles";
import {useDispatch} from "react-redux";

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;