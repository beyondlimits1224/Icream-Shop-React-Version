import React from "react";
import icreamshoplogo from "../assets/icecreamshop-logo.png";

export default function BrandLogo() {
  return (
    <div>
      <img src={icreamshoplogo} className="brand-logo" alt="Icecreamshop" />
    </div>
  );
}
