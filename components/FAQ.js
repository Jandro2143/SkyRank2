import { useState } from 'react';
import '../css/FAQ.css';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        You ask? <span className="faq-highlight">We answer</span>
      </h2>
      <div className="faq-container">
        {/* FAQ 1 */}
        <div className={`faq-item ${openFAQ === 0 ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => toggleFAQ(0)}>
            What is SEO, and why is it important?
            <span className="faq-icon">{openFAQ === 0 ? '−' : '+'}</span>
          </button>
          <div className="faq-answer">
            <p>
              SEO (Search Engine Optimization) improves your website's visibility
              on search engines like Google, helping you attract more organic traffic.
            </p>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className={`faq-item ${openFAQ === 1 ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => toggleFAQ(1)}>
            How long does it take to see results?
            <span className="faq-icon">{openFAQ === 1 ? '−' : '+'}</span>
          </button>
          <div className="faq-answer">
            <p>
              SEO results typically take 3-6 months, while Google Ads can generate
              immediate traffic. The timeline depends on your goals and competition.
            </p>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className={`faq-item ${openFAQ === 2 ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => toggleFAQ(2)}>
            Do you offer custom packages for businesses?
            <span className="faq-icon">{openFAQ === 2 ? '−' : '+'}</span>
          </button>
          <div className="faq-answer">
            <p>
              Yes! We tailor our SEO and Google Ads services to meet the unique needs of your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
