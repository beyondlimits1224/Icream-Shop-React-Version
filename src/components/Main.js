import React from "react";
import Hero from "./Hero";
import Product from "./Product";

export default function Main() {
  return (
    <div>
      <Hero />
      <h2>Featured Products!</h2>
      <Product />
    </div>
  );
}
