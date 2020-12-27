import React from "react";
import "./css/hero.css";
import heroBanner from "./img/banner1.png";
export default function Hero() {
  return (
    <div>
      <img src={heroBanner} className="my-hero" alt="" />
    </div>
  );
}