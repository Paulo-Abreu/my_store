import React, { useState } from "react";
import Paymentstock from "./Table";
const PaymentPage = (props) => {
  const Table = props.data.stock.map((product) => (
    <Paymentstock
      name={product.item.name}
      price={product.item.price}
      quantity={product.quantity}
      id={product.id}
      key={product.id}
    />
  ));
  return (
    <div>
      {Table}
    </div>
  );
};
export default PaymentPage;
