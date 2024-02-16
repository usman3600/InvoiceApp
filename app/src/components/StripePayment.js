import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe("pk_test_51OjdIVIFZjCaR7WQxwsiyARYzUVbPCMknnDxAy2lEkuZuJ2PCnGqbqUMqKBf4mUnnepwHsv5e95bv5wfGOdWyyL500HyFRarLz");

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetchClientSecret();
  }, []);

  const fetchClientSecret = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{}] }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error(error);
    }
  };

  const options = {
    clientSecret
  }
  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default StripePayment;
