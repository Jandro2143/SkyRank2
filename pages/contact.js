import "../css/contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Reach out today to discuss your needs.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <h2>Get in Touch</h2>
          <p>Fill out the form below, and we’ll get back to you as soon as possible.</p>
          <form className="contact-form">
            {/* Company Name */}
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company Name"
                required
              />
            </div>

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us your requirements"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
