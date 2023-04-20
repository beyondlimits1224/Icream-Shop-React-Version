import React from "react";
import BrandLogo from "./BrandLogo";
import Nav from "./Nav";
import SecondaryMenu from "./SecondaryMenu";

export default function Header() {
  return (
    <header className="flex-container aic">
      <div class="f-b-20">
        <BrandLogo />
      </div>
      <div class="f-b-40">
        <Nav />
      </div>
      <div class="othermenu f-b-40">
        <SecondaryMenu />
      </div>
      {/* <h1>This is the header!</h1> */}
    </header>
  );
}
