import "../css/ContactUs.css";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="contact-section">
      <div className="contact-box">
        <div className="contact-content">
          <h2 className="contact-title">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="contact-description">
            Get in touch with us today and let&apos;s create a tailored solution to grow your business. 
            Our team is ready to help you succeed with expert strategies and insights.
          </p>
          <Link href="/contact">
            <button className="contact-button">Contact Us Now</button>
          </Link>
        </div>
        <div className="contact-image">
          <Link href="/contact">
            <img src="/contact.svg" alt="Contact Us" />
          </Link>
        </div>
      </div>
    </section>
  );
}
