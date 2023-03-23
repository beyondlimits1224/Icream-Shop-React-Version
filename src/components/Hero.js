import React from "react";

export default function Hero() {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/images/hero-image.jpg"}
        className="hero"
        alt="Hero"
      />
    </div>
  );
}
