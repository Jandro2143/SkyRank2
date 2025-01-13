import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Insights() {
  const insights = [
    {
      title: "5 Ways to Improve Your Website Performance",
      description: "Learn actionable tips to make your website faster and improve user experience.",
      date: "April 15, 2024",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
    {
      title: "Why SEO is Crucial for Small Businesses",
      description: "Discover how search engine optimization can help you grow your online visibility.",
      date: "May 10, 2024",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
    {
      title: "A Deep Dive into Google Ads Optimization",
      description: "Explore the best practices for running high-performing Google Ads campaigns.",
      date: "June 1, 2024",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
    {
      title: "Case Study: Boosting E-commerce Sales by 200%",
      description: "See how we helped a client optimize their website and ads to increase conversions.",
      date: "June 20, 2024",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="insights-hero">
        <div className="hero-content">
          <h1>Our Insights</h1>
          <p>Stay informed with our latest articles, case studies, and industry tips to grow your business.</p>
        </div>
      </section>

      {/* Insights Section */}
      <section className="insights-section">
        <div className="insights-container">
          {insights.map((post, index) => (
            <div key={index} className="insight-card">
              <Image
                src={post.image}
                alt={post.title}
                width={600} // Set width
                height={400} // Set height
                layout="intrinsic" // Maintain aspect ratio and intrinsic dimensions
                priority={index === 0} // Prioritize loading the first image
              />
              <div className="insight-details">
                <p className="post-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <a href={post.link} className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
