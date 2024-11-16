import React from 'react';
import '../../style/living.css';

const ProductSection: React.FC = () => {
  return (
    <section className="product-section">
      <div className="section-header">
        <h2>Stylish Collection of Furniture</h2>
        <p>Stay updated with our information and engaging blog posts about modern Furniture and Fashion in the industry</p>
      </div>

      <div className="category-buttons">
        <button className="category-button active">All Furniture</button>
        <button className="category-button">Bedroom</button>
        <button className="category-button">Living Room</button>
        <button className="category-button">Home Office</button>
        <button className="category-button">Dining Table</button>
        <button className="category-button">More</button>
      </div>

      <div className="product-grid">
        {/* Product Cards */}
        {[
          { name: 'Stylish Soft Chair', price: '$20.00', Image: '/s1.png' },
          { name: 'Modern Soft Chair', price: '$40.00', Image: '/s2.png' },
          { name: 'Comfortable Soft Chair', price: '$40.00', Image: '/s3.png' },
          { name: 'New Soft Chair', price: '$20.00', Image: '/s4.png' },
          { name: 'New Light Soft Chair', price: '$80.00', Image: '/s6.png' },
          { name: 'Soft Sofa', price: '$32.00', Image: '/s62.png' },
          { name: 'Old Modern Soft Chair', price: '$70.00', Image: '/s7.png' },
          { name: 'Stylish Soft Chair', price: '$20.00', Image: '/s8.png' },
        ].map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.Image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Add to</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
