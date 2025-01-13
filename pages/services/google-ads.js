import Header from "../../components/Header";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import PricingCards from "../../components/PricingCards";

export default function GoogleAds() {
  const googleAdsFeatures = [
    { feature: "Campaign Setup", basic: true, standard: true, advanced: true },
    { feature: "Budget Optimization", basic: true, standard: true, advanced: true },
    { feature: "A/B Testing", basic: false, standard: true, advanced: true },
    { feature: "Conversion Tracking", basic: false, standard: true, advanced: true },
    { feature: "Performance Dashboard", basic: false, standard: true, advanced: true },
    { feature: "Advanced Analytics", basic: false, standard: false, advanced: true },
    { feature: "Custom Reporting", basic: false, standard: false, advanced: true },
  ];

  const featuresInfo = [
    {
      title: "Campaign Setup",
      description: "We set up your ad campaigns to maximize visibility and ensure optimal targeting.",
      icon: "🚀",
    },
    {
      title: "Budget Optimization",
      description: "We optimize your budget to achieve the best ROI with carefully monitored spend.",
      icon: "💰",
    },
    {
      title: "A/B Testing",
      description: "Run multiple ad variations to determine the best-performing campaigns.",
      icon: "🧪",
    },
    {
      title: "Conversion Tracking",
      description: "Track your conversions effectively to measure success and make data-driven decisions.",
      icon: "📊",
    },
    {
      title: "Performance Dashboard",
      description: "Access a real-time performance dashboard with actionable insights.",
      icon: "📈",
    },
    {
      title: "Advanced Analytics",
      description: "Gain deep insights into campaign performance with advanced analytics tools.",
      icon: "📉",
    },
    {
      title: "Custom Reporting",
      description: "Get tailored performance reports to evaluate results and strategies.",
      icon: "📝",
    },
  ];

  const pricingPlans = [
    {
      title: "Basic",
      price: "$199/campaign",
      description: "Budget-friendly campaigns for small businesses",
      features: [
        "1 Campaign Setup",
        "Budget Optimization",
        "Basic Performance Tracking",
        "Weekly Reports",
      ],
      bestFor: "Small ad campaigns",
    },
    {
      title: "Standard",
      price: "$499/campaign",
      description: "Optimized campaigns for medium businesses",
      features: [
        "3 Campaigns Setup",
        "A/B Testing",
        "Conversion Tracking",
        "Performance Dashboard",
      ],
      bestFor: "Medium businesses, e-commerce ads",
    },
    {
      title: "Advanced",
      price: "$999/month",
      description: "High-performance campaigns for large businesses",
      features: [
        "Unlimited Campaigns",
        "Advanced Conversion Tracking",
        "Google Analytics Integration",
        "Custom Performance Reports",
      ],
      bestFor: "High-budget campaigns, Large businesses",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="googleads-hero">
        <div className="hero-content">
          <h1>Google Ads Management</h1>
          <p>
            Drive immediate traffic and conversions with our tailored Google Ads strategies. Maximize ROI with
            precision-targeted campaigns.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="googleads-introduction">
        <div className="intro-content">
          <p>
            At <strong>WeRocket</strong>, we specialize in managing Google Ads campaigns that deliver real results.
            Whether you&apos;re looking to launch a small campaign or scale your advertising efforts, our expertise
            ensures your ads perform at their best.
          </p>
          <p>
            Our Google Ads tiers offer a solution for businesses of all sizes. Explore our feature-rich packages
            to find the one that best suits your advertising needs.
          </p>
        </div>
      </section>

      {/* Table Section */}
      <section className="googleads-table-section">
        <h2 className="googleads-table-title">Google Ads Service Tiers</h2>
        <div className="googleads-table-container">
          <table className="googleads-table">
            <thead>
              <tr>
                <th>Features</th>
                <th className="basic">Basic</th>
                <th className="standard">Standard</th>
                <th className="advanced">Advanced</th>
              </tr>
            </thead>
            <tbody>
              {googleAdsFeatures.map((item, index) => (
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

      {/* Features Section */}
      <section className="googleads-features-container">
        {featuresInfo.map((feature, index) => (
          <div key={index} className="googleads-feature-card">
            <div className="googleads-feature-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Pricing Cards */}
      <PricingCards title="Google Ads Packages" plans={pricingPlans} />

      <ContactUs />
      <Footer />
    </div>
  );
}
