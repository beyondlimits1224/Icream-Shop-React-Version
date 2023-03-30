import React from "react";
import BrandLogo from "./BrandLogo";
import Nav from "./Nav";
import SecondaryMenu from "./SecondaryMenu";

export default function Header() {
  return (
    <header className="flex-container">
      <BrandLogo />
      <Nav />
      <SecondaryMenu />
      <h1>This is the header!</h1>
    </header>
  );
}
