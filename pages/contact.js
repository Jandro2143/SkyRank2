import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending your message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! We will get back to you soon.');
        setFormData({ company: '', name: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send message: ${errorData.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('An error occurred while sending your message. Please try again later.');
    }
  };

  return (
    <div>
      <Header />
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you! Reach out today to discuss your needs.</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-container">
          <h2>Get in Touch</h2>
          <p>Fill out the form below, and we&apos;ll get back to you as soon as possible.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us your requirements"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </section>
      <Footer />
    </div>
  );
}
