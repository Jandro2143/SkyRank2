import "../css/about.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Discover who we are, what we stand for, and how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-introduction">
        <div className="intro-content">
          <p>
            At <strong>SkyRank</strong>, we are passionate about delivering exceptional digital services.
            Our team is dedicated to creating innovative solutions that help businesses thrive online. 
            Whether it's building stunning websites, optimizing SEO, or running high-performance ad campaigns,
            we are your trusted partner for success.
          </p>
          <p>
            Our mission is simple: <em>to empower businesses with modern, effective, and scalable digital strategies.</em> 
            We combine creativity, technology, and expertise to deliver results that matter.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>🚀 Innovation</h3>
            <p>We embrace the latest technologies and ideas to provide cutting-edge solutions.</p>
          </div>
          <div className="value-card">
            <h3>💡 Creativity</h3>
            <p>Creative minds drive our work, ensuring every project is unique and impactful.</p>
          </div>
          <div className="value-card">
            <h3>🤝 Commitment</h3>
            <p>Your success is our top priority. We are dedicated to delivering outstanding results.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Lead Designer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Michael Johnson</h3>
            <p>Marketing Head</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
