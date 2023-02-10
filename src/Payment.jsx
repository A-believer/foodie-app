 import React from 'react';
  import { PaystackButton } from 'react-paystack';
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "davedev1209@gmail.com",
    amount: 200000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_5b4384086d66c688f6e4780fadf956209517e4b1',
  };
  
  function Payment() {
    // you can call this function anything
    const handlePaystackSuccessAction = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return (
      <div>
            <PaystackButton {...componentProps} />
        </div>
    );
  }
  
  export default Payment;