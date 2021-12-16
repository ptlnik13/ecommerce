import React from 'react';

// import './cart-item.styles.scss';
import {CartItemContainer, CartItemImage, ItemsDetailsContainer, NameContainer} from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item"/>
            <ItemsDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <NameContainer>{quantity} x ${price}</NameContainer>
            </ItemsDetailsContainer>

        </CartItemContainer>
    );
};

export default CartItem;