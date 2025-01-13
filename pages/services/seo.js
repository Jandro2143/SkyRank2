import "../../css/seo.css";
import Header from "../../components/Header";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import PricingCards from "../../components/PricingCards";

export default function Seo() {
  const seoFeatures = [
    { feature: "On-Page Optimization", basic: true, standard: true, advanced: true },
    { feature: "Keyword Research (5-20 Keywords)", basic: true, standard: true, advanced: true },
    { feature: "Content Optimization", basic: false, standard: true, advanced: true },
    { feature: "Competitor Analysis", basic: false, standard: false, advanced: true },
    { feature: "Detailed SEO Audit", basic: false, standard: false, advanced: true },
    { feature: "Monthly Reporting", basic: true, standard: true, advanced: true },
    { feature: "Link Building", basic: false, standard: true, advanced: true },
    { feature: "Dedicated Support", basic: false, standard: false, advanced: true },
  ];

  const seoFeatureDetails = [
    {
      title: "On-Page Optimization",
      description: "We optimize individual pages on your website, including meta tags and headings, to make them more search-engine friendly.",
      icon: "🔍",
    },
    {
      title: "Keyword Research",
      description: "We identify the best keywords to target, ensuring your content attracts the right audience and drives quality traffic.",
      icon: "🔑",
    },
    {
      title: "Content Optimization",
      description: "We improve your existing content or create new content that is engaging, informative, and optimized for SEO.",
      icon: "✍️",
    },
    {
      title: "Competitor Analysis",
      description: "We analyze your competitors to identify opportunities and strategies to stay ahead in search results.",
      icon: "📊",
    },
    {
      title: "SEO Audit",
      description: "A detailed audit identifies issues on your website that need fixing to improve SEO performance.",
      icon: "🛠️",
    },
    {
      title: "Monthly Reporting",
      description: "We provide detailed reports showing progress, keyword rankings, and actionable insights for continued growth.",
      icon: "📈",
    },
    {
      title: "Link Building",
      description: "We build high-quality backlinks to improve your website’s authority and boost search engine rankings.",
      icon: "🔗",
    },
    {
      title: "Dedicated Support",
      description: "Our team provides personalized support to ensure you get the best results from our SEO strategies.",
      icon: "🤝",
    },
  ];

  const pricingPlans = [
    {
      title: "Horizon",
      price: "$199/month",
      description: "Essential for small websites and blogs",
      features: [
        "On-Page Optimization",
        "Keyword Research (5 Keywords)",
        "Basic Reporting",
        "Monthly Check-ins",
      ],
    },
    {
      title: "Stratosphere",
      price: "$399/month",
      description: "A comprehensive solution for growing businesses",
      features: [
        "On-Page & Off-Page SEO",
        "Keyword Research (10 Keywords)",
        "Content Optimization",
        "Detailed Monthly Reports",
      ],
    },
    {
      title: "Zenith",
      price: "$799/month",
      description: "Full-scale SEO for large businesses",
      features: [
        "Full SEO Audit & Strategy",
        "20+ Keywords Optimization",
        "Content Writing",
        "Competitor Analysis & Tracking",
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="seo-hero">
        <div className="hero-content">
          <h1>SEO Services That Drive Results</h1>
          <p>
            Improve your website&apos;s visibility, rank higher on search engines, and attract the right audience with
            our tailored SEO strategies.
          </p>
        </div>
      </section>

      {/* Introduction Paragraphs */}
      <section className="seo-introduction">
        <div className="intro-content">
          <p>
            At <strong>WeRocket</strong>, we provide specialized SEO services tailored to your business needs. Our team 
            works tirelessly to ensure your website ranks higher in search engine results, driving organic traffic 
            and increasing visibility to your target audience.
          </p>
          <p>
            Whether you&apos;re a small business or a large enterprise, our SEO tiers are designed to deliver measurable 
            results. From keyword research to on-page optimization and competitor analysis, we’ll help you outshine 
            competitors and achieve sustainable growth.
          </p>
        </div>
      </section>

      {/* Features Table */}
      <section className="seo-table-section">
        <h2 className="table-title">SEO Service Tiers</h2>
        <div className="table-container">
          <table className="seo-table">
            <thead>
              <tr>
                <th>Features</th>
                <th className="basic">Basic</th>
                <th className="standard">Standard</th>
                <th className="advanced">Advanced</th>
              </tr>
            </thead>
            <tbody>
              {seoFeatures.map((item, index) => (
                <tr key={index}>
                  <td>{item.feature}</td>
                  <td className={item.basic ? "checkmark" : "dash"}></td>
                  <td className={item.standard ? "checkmark" : "dash"}></td>
                  <td className={item.advanced ? "checkmark" : "dash"}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="seo-info-section">
        <div className="seo-features-container">
          {seoFeatureDetails.map((feature, index) => (
            <div key={index} className="seo-feature-card">
              <div className="seo-feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Cards Section */}
      <PricingCards plans={pricingPlans} />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
