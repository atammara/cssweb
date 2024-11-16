import React from 'react';
import '../../style/hero.css';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover The Latest <span>Furniture Trends</span></h1>
        <p>Discover stylish furniture pieces that elevate your home decor and keep you ahead in the style game</p>
        <button className="explore-btn">
          Explore More → </button>
      </div>
      <div className="hero-images">
        <div className="image-container">
          <Image src="/1.png" alt="Trendy Chair" className="image"/>
          <span className="tag">New</span>
        </div>
        <div className="image-container">
          <Image src="/R.png" alt="Lounge Chair" className="image"/>
          <span className="tag">New</span>
        </div>
        <div className="image-container large">
          <Image src="/Re.png" alt="Modern Sofa" className="image"/>
          <span className="tag">New</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
