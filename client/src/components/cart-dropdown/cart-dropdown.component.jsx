import React from 'react';
import CartItem from "../cart-item/cart-item.component";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {CartDropdownButton, CartDropdownContainer, CartItemsContainer, EmptyMessageContainer} from "./cart-dropdown.styles";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                        : <EmptyMessageContainer>No Items in Cart.</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton className='custom-button' onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    );
};

export default CartDropdown;