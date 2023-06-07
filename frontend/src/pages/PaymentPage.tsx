import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { Helmet } from "react-helmet-async";

const PaymentPage = () => {
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
      </Helmet>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        {" "}
        <h1 className="my-3">Payment</h1>
      </div>
    </div>
  );
};

export default PaymentPage;
