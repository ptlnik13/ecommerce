import React from "react";
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";
import {useDispatch} from "react-redux";
import {clearCart} from "../../redux/cart/cart.actions";


const StripeCheckoutButton = ({price}) => {
    const dispatch = useDispatch();
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K6flvLL93N5RrYHHpB66TPrJfwIC8r4i5AUPdfnf5DtCubAWl06CeoUtVxRXad9pZjeEklOPanTXG3XHgeNQ4cI00JbE7FRku';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successfully made 😊');
            dispatch(clearCart());
        }).catch(e => {
            console.log(`payment Error: ${JSON.parse(e)}`);
            alert('There was an issue with your payment. Please make sure you use the provided test credit cards.')
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='YourVoice Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;