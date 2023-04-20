import React from "react";

export default function Product() {
  const imgsrc = process.env.PUBLIC_URL;

  return (
    <div className="container-800 m-auto">
      <ul className="products flex-container f-wrap">
        <li className="item">
          <a href="index.html">
            <img src={imgsrc + "/images/ice-cream-1.jpg"} alt="Ice Cream 1" />
          </a>
          <h2>Ice Cream 1</h2>
          $8.00
        </li>
        <li className="item">
          <a href="index.html">
            <img src={imgsrc + "/images/ice-cream-2.jpg"} alt="Ice Cream 2" />
          </a>
          <h2>Ice Cream 2</h2>
          $12.00
        </li>
        <li className="item">
          <a href="index.html">
            <img src={imgsrc + "/images/ice-cream-3.jpg"} alt="Ice Cream 3" />
          </a>
          <h2>Ice Cream 3</h2>
          $19.00
        </li>
        <li className="item">
          <a href="index.html">
            <img src={imgsrc + "/images/ice-cream-4.jpg"} alt="Ice Cream 4" />
          </a>
          <h2>Ice Cream 4</h2>
          $25.00
        </li>
        <li className="item">
          <a href="index.html">
            <img src={imgsrc + "/images/ice-cream-5.jpg"} alt="Ice Cream 5" />
          </a>
          <h2>Ice Cream 5</h2>
          $12.00
        </li>
        <li className="item">
          <a href="index.html">
            <img src={imgsrc + "/images/ice-cream-6.jpg"} alt="Ice Cream 6" />
          </a>
          <h2>Ice Cream 6</h2>
          $8.00
        </li>
        <li className="item">
          <a href="index.html">
            <img src={imgsrc + "/images/ice-cream-7.jpg"} alt="Ice Cream 7" />
          </a>
          <h2>Ice Cream 7</h2>
          $22.00
        </li>
        <li className="item">
          <a href="index.html">
            <img src={imgsrc + "/images/ice-cream-8.jpg"} alt="Ice Cream 8" />
          </a>
          <h2>Ice Cream 8</h2>
          $3.00
        </li>
        <li className="item">
          <a href="index.html">
            <img src={imgsrc + "/images/ice-cream-9.jpg"} alt="Ice Cream 9" />
          </a>
          <h2>Ice Cream 9</h2>
          $32.00
        </li>
      </ul>
    </div>
  );
}
