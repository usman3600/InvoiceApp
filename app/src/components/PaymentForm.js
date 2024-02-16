import React, { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import {Button, Container, Typography} from "@mui/material"
const PaymentForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-complete",
      }
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Your payment succeeded");
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{marginTop:"20px"}}>
      <Typography variant="h1" sx={{color:"aqua", backgroundColor:"black"}}>Invoice App</Typography>
      <form onSubmit={handleSubmit} >
        <p className="text-black mb-4">Complete your payment here!</p>
        <PaymentElement  />
        <Button type="submit" variant="contained" disabled={!stripe || loading} sx={{marginTop:"10px", marginBottom:"10px"}}>
          {loading ? "Processing..." : "Pay"}
        </Button>
        {message && <div>{message}</div>}
      </form>
    </Container>
  );
};

export default PaymentForm;
