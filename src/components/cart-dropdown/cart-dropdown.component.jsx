import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {CartDropdownButton, CartDropdownContainer, CartItemsContainer, EmptyMessageContainer} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => {
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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));