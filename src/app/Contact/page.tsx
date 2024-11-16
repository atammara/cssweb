import React from "react";
import "../../style/contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact-page">
      <div className="contact-form-section">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} placeholder="Write your message"></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="detail-item">
          <span>📍</span>
          <p>123 Furniture Street, Design City, DS 12345</p>
        </div>
        <div className="detail-item">
          <span>✉️</span>
          <p>support@furniturebrand.com</p>
        </div>
        <div className="detail-item">
          <span>📞</span>
          <p>+1 234 567 890</p>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="google-map">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509093!2d144.95373531566935!3d-37.81720974202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770e153d4cb30a!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1619931181110!5m2!1sen!2sau"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
