import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          YOUR FEET <br /> DESERVE <br /> THE BEST
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="available">
          <p>Also Available On</p>
          <div className="stores">
            <img src="/images/FlipKart.png" />
            <img src="/images/Amazon.png" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/Shoe.png" />
      </div>
    </section>
  );
};

export default Hero;
