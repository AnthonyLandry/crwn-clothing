import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51GzsqdDIs7FfKOBjgxXe4TI2kVUJUeIQFHkpXBatahST85Q3ru3TDmJU8yMIz4HlcqK9PD72aZsSg5dP2scU5d5900xHhbjcUZ"

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
};

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;