import React from "react";
import BottomMenu from "./BottomMenu";
import BrandLogo from "./BrandLogo";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer>
      <BottomMenu />

      <div className="text-center">
        <BrandLogo />
      </div>
      <Copyright />
    </footer>
  );
}
