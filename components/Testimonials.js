import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">
        Customers Opinion<span className="highlight">s</span>
      </h2>
      <p className="testimonial-subtitle">
        Don&apos;t just take our word for it – see what our amazing clients have to say.
      </p>

      {/* Testimonials Container */}
      <div className="testimonials-container">
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <p className="testimonial-quote">
            &quot;I was struggling to rank my website, but this team completely turned it around! Their strategies
            brought me more traffic and leads than ever before. Highly recommend!&quot;
          </p>
          <div className="star-rating">★★★★★</div>
          <div className="testimonial-info">
            <div>
              <h3>Jane Smith</h3>
              <p>Senior Developer</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <p className="testimonial-quote">
            &quot;The Google Ads campaigns brought instant results. Professional, responsive, and truly a pleasure
            to work with!&quot;
          </p>
          <div className="star-rating">★★★★★</div>
          <div className="testimonial-info">
            <div>
              <h3>Tom Williams</h3>
              <p>Business Owner</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <p className="testimonial-quote">
            &quot;Amazing experience! The team helped optimize my website and our ROI has never been better.&quot;
          </p>
          <div className="star-rating">★★★★★</div>
          <div className="testimonial-info">
            <div>
              <h3>Michael Brown</h3>
              <p>CEO, StartUp Co.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
