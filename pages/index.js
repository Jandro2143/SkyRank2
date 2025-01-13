import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { useState } from 'react';
import ContactUs from '../components/ContactUs';

export default function Home() {
  const [] = useState(null);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Business with SEO & Google Ads</h1>
          <p>Drive targeted traffic, increase visibility, and maximize your ROI.</p>
          <button>Contact Us Now</button>
        </div>
        <div className="hero-video">
          <video src="/Comp 1_1_2_1.mp4" autoPlay loop muted playsInline />
        </div>
      </section>


      {/* Our Services */}
      <Services/>

      {/* Testimonials Section */}
      <Testimonials/>

      {/* FAQ Section */}
      <FAQ />

      {/* ContactUs Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
