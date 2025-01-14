import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");

  const insights = [
    {
      title: "5 Ways to Improve Your Website Performance",
      description: "Learn actionable tips to make your website faster and improve user experience.",
      date: "April 15, 2024",
      image: "https://via.placeholder.com/600x400",
      link: "#",
      category: "Website Performance",
    },
    {
      title: "Why SEO is Crucial for Small Businesses",
      description: "Discover how search engine optimization can help you grow your online visibility.",
      date: "May 10, 2024",
      image: "https://via.placeholder.com/600x400",
      link: "#",
      category: "SEO",
    },
    {
      title: "A Deep Dive into Google Ads Optimization",
      description: "Explore the best practices for running high-performing Google Ads campaigns.",
      date: "June 1, 2024",
      image: "https://via.placeholder.com/600x400",
      link: "#",
      category: "Google Ads",
    },
    {
      title: "Case Study: Boosting E-commerce Sales by 200%",
      description: "See how we helped a client optimize their website and ads to increase conversions.",
      date: "June 20, 2024",
      image: "https://via.placeholder.com/600x400",
      link: "#",
      category: "Case Studies",
    },
  ];

  const filteredInsights = activeCategory === "All"
    ? insights
    : insights.filter((post) => post.category === activeCategory);

  return (
    <div>
      <Header />
      <section className="insights-hero">
        <div className="hero-content">
          <h1>Our Insights</h1>
          <p>Explore articles, case studies, and expert tips to help grow your business.</p>
        </div>
      </section>

      <section className="insights-categories">
        <div className="categories-container">
          {["All", "Website Performance", "SEO", "Google Ads", "Case Studies"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="insights-section">
        <div className="insights-container">
          {filteredInsights.map((post, index) => (
            <div key={index} className="insight-card">
              <div className="insight-details">
                <p className="post-date">{post.date}</p>
                <p className="category">{post.category}</p>
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
      <Footer />
    </div>
  );
}
