import Link from "next/link";
import Image from "next/image";

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
          <Link href="/contact" passHref>
            <button className="contact-button">Contact Us Now</button>
          </Link>
        </div>
        <div className="contact-image">
          <Link href="/contact" passHref>
            <Image
              src="/contact.svg"
              alt="Contact Us"
              width={400}
              height={300}
              className="contact-image-element"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
