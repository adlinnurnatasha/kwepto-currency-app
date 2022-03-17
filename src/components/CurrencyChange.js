import React from "react";

const CurrencyChange = ({ currency }) => {
  const currencyOptions = [
    { value: "myr", label: "MYR" },
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
    { value: "gbp", label: "GBP" },
    { value: "jpy", label: "JPY" },
  ];
  return <li>Currency</li>;
};

export default CurrencyChange;
