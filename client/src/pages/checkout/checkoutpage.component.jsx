import React from 'react';

import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TestCard, TotalContainer, WarningContainer} from "./checkout.styles";

const CheckoutPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer><span>Product</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Description</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Quantity</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Price</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Remove</span></HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            }
            <TotalContainer>Total: $ {total}</TotalContainer>
            <WarningContainer>
                *Please use the following <TestCard href="https://stripe.com/docs/testing#cards" target={'_blank'} rel="noreferrer">Test Credit Card</TestCard> for Payments* <br/>

            </WarningContainer>
            <StripeCheckoutButton price={total}/>
        </CheckoutPageContainer>
    );
};

export default CheckoutPage;