import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {CartContainer, ItemCountContainer, ShoppingIcon} from "./cart-icon.styles";

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    const toggleCartHiddenClickHandler = () => dispatch(toggleCartHidden());
    return (
        <CartContainer onClick={toggleCartHiddenClickHandler}>
            <ShoppingIcon/>
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartContainer>
    );
};

export default CartIcon;