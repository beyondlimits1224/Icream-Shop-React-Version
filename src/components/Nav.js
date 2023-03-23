import React from "react";

export default function Nav() {
  return (
    <nav className="menu" alt="Menu">
      <ul className="menu-item">
        <li>
          <a href="index.html" className="active">
            Products
          </a>
        </li>
        <li>
          <a href="index.html">About</a>
        </li>
      </ul>
    </nav>
  );
}
