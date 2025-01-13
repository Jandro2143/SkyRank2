import Header from "../../components/Header";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import PricingCards from "../../components/PricingCards";

export default function WebDevelopment() {
  const webDevFeatures = [
    { feature: "Responsive Design", basic: true, standard: true, advanced: true },
    { feature: "Custom Website Design", basic: false, standard: true, advanced: true },
    { feature: "E-commerce Integration", basic: false, standard: false, advanced: true },
    { feature: "Website Optimization", basic: true, standard: true, advanced: true },
    { feature: "CMS Integration", basic: false, standard: true, advanced: true },
    { feature: "SEO-Friendly Design", basic: false, standard: true, advanced: true },
    { feature: "Maintenance & Support", basic: false, standard: false, advanced: true },
  ];

  const featuresInfo = [
    {
      title: "Responsive Design",
      description: "Your website will look amazing on all devices, from desktops to mobile phones.",
      icon: "📱",
    },
    {
      title: "Custom Design",
      description: "We design visually stunning websites tailored to your brand and goals.",
      icon: "🎨",
    },
    {
      title: "E-commerce Solutions",
      description: "Integrated e-commerce functionality to help you sell online seamlessly.",
      icon: "🛒",
    },
    {
      title: "Website Optimization",
      description: "Fast-loading, performance-optimized websites for a better user experience.",
      icon: "⚡",
    },
    {
      title: "CMS Integration",
      description: "Easily manage and update content with platforms like WordPress, Shopify, or custom solutions.",
      icon: "💻",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support to keep your website secure, updated, and running smoothly.",
      icon: "🛠️",
    },
    {
      title: "SEO-Friendly",
      description: "Optimized to help your website rank higher on search engines.",
      icon: "🚀",
    },
  ];

  const pricingPlans = [
    {
      title: "Basic",
      price: "$299/project",
      description: "Perfect for individuals and small projects",
      features: [
        "1-Page Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form Integration",
      ],
      bestFor: "Personal websites, Landing pages",
    },
    {
      title: "Standard",
      price: "$599/project",
      description: "Ideal for growing businesses and blogs",
      features: [
        "5-Page Website",
        "Custom Design",
        "SEO Optimization",
        "Mobile-Friendly Design",
      ],
      bestFor: "Small businesses, Blogs",
    },
    {
      title: "Advanced",
      price: "$999/project",
      description: "For businesses needing custom, scalable solutions",
      features: [
        "10+ Pages",
        "Custom Features (E-commerce, Blogs)",
        "Full SEO Setup",
        "Performance Optimization",
      ],
      bestFor: "Businesses, E-commerce platforms",
    },
  ];

  return (
    <div>
      <Header />

      {/* Header Section */}
      <section className="webdev-hero">
        <div className="hero-content">
          <h1>Professional Web Development Services</h1>
          <p>
            Build stunning, responsive websites tailored to your brand and goals. Whether it&apos;s custom designs,
            e-commerce solutions, or optimized performance, we have the expertise to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="webdev-introduction">
        <div className="intro-content">
          <p>
            At <strong>WeRocket</strong>, we specialize in creating professional, user-friendly websites that
            make a lasting impact. From personal blogs to fully scalable e-commerce solutions, our development
            process is focused on delivering results that align with your goals.
          </p>
          <p>
            Our web development tiers ensure that every business—small or large—gets the tools they need for a
            standout online presence. Explore our feature-rich tiers and find the right package for you.
          </p>
        </div>
      </section>

      {/* Table Section */}
      <section className="webdev-table-section">
        <h2 className="webdev-table-title">Web Development Tiers</h2>
        <div className="webdev-table-container">
          <table className="webdev-table">
            <thead>
              <tr>
                <th>Features</th>
                <th className="basic">Basic</th>
                <th className="standard">Standard</th>
                <th className="advanced">Advanced</th>
              </tr>
            </thead>
            <tbody>
              {webDevFeatures.map((item, index) => (
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
      <section className="webdev-features-container">
        {featuresInfo.map((feature, index) => (
          <div key={index} className="webdev-feature-card">
            <div className="webdev-feature-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Pricing Cards */}
      <PricingCards title="Web Development Packages" plans={pricingPlans} />

      {/* Contact Us */}
      <ContactUs />

      <Footer />
    </div>
  );
}
