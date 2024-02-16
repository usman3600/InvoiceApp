// PaymentComplete.js
import React from "react";
import { Typography, Container } from "@mui/material";

const PaymentComplete = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: "50px" }}>
      <Typography variant="h3" sx={{ color: "aqua", backgroundColor: "black", marginBottom: "20px" }}>Payment Complete</Typography>
     <Typography variant="body1">Your payment was successful. Thank you!</Typography>
    </Container>
  );
};

export default PaymentComplete;
