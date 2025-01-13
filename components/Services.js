import Link from "next/link";
import Image from "next/image";
import "../css/Services.css";

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {/* Service 1 */}
        <div className="service-card">
          <Image
            src="/undraw_search-engines_k649.svg"
            alt="SEO Services"
            className="service-icon"
            width={150}
            height={150}
          />
          <h3>SEO Services</h3>
          <p>
            Boost your website&apos;s traffic and search engine rankings with
            customized, data-driven SEO strategies.
          </p>
          <Link href="/services/seo" passHref>
            <button className="learn-more-button">Learn More</button>
          </Link>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <Image
            src="/undraw_website_27ju.svg"
            alt="Website Building"
            className="service-icon"
            width={150}
            height={150}
          />
          <h3>Website Building</h3>
          <p>
            Create beautiful, responsive websites designed to showcase your
            brand and convert visitors.
          </p>
          <Link href="/services/web-development" passHref>
            <button className="learn-more-button">Learn More</button>
          </Link>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <Image
            src="/googlead.svg"
            alt="Google Ads"
            className="service-icon"
            width={150}
            height={150}
          />
          <h3>Google Ads</h3>
          <p>
            Drive immediate results with expertly crafted, high-converting
            Google Ads campaigns.
          </p>
          <Link href="/services/google-ads" passHref>
            <button className="learn-more-button">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
