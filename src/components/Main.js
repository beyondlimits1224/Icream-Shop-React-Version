import React from "react";
import Hero from "./Hero";
import Product from "./Product";

export default function Main() {
  return (
    <div>
      <Hero />
      <h2 className="text-center mt-3 mb-3">Featured Products!</h2>
      <Product />
    </div>
  );
}
