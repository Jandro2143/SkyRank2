import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import PricingCards from "../components/PricingCards";
import { useState } from "react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("Web Development");

  const services = [
    {
      name: "Web Development",
      plans: [
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
      ],
    },
    {
      name: "SEO Services",
      plans: [
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
          bestFor: "Personal blogs, Small websites",
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
          bestFor: "Growing businesses",
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
          bestFor: "Large-scale businesses",
        },
      ],
    },
    {
      name: "Google Ads",
      plans: [
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
      ],
    },
    {
      name: "Custom",
      plans: [
        {
          title: "Tailored Solutions",
          price: "Contact Us",
          description: "Flexible solutions for unique business needs",
          features: [
            "Flexible Pricing Based on Needs",
            "Choose 2 or More Services",
            "Custom Features & Integrations",
            "Priority Support",
          ],
          bestFor: "Unique business needs requiring multiple services",
        },
      ],
    },
  ];

  const activeService = services.find((service) => service.name === activeTab);

  return (
    <div>
      <Header />
      {/* Pricing Section Header */}
      <section className="pricing-header">
        <div className="header-content">
          <h2 className="section-title">Our Pricing Plans</h2>
          <p className="pricing-subtitle">
            Choose a plan that best fits your needs. Detailed offerings for every tier.
          </p>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="pricing-section">
        <div className="tab-selector">
          {services.map((service) => (
            <button
              key={service.name}
              className={`tab-button ${activeTab === service.name ? "active" : ""}`}
              onClick={() => setActiveTab(service.name)}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Pricing Cards Component */}
        <PricingCards plans={activeService.plans} />
      </section>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
