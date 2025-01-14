import React from "react";
import Link from 'next/link';

export default function PricingCards({ title, plans }) {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">{title}</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.title}</h3>
            <h4>{plan.price}</h4>
            <p className="plan-description">{plan.description}</p>
            <ul className="feature-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <p className="best-for">Best For: {plan.bestFor}</p>
            <Link href="/contact">
              <button className="cta-button">Get Started</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
