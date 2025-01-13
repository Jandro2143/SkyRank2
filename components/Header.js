import Link from "next/link";
import '../css/Header.css';
import { useState, useEffect } from "react";

export default function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scrolling

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <span className="logo-bold">Sky</span><span className="logo-bold2">Rank</span>
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-links">
            <li
              className="dropdown"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
            >
              <span className="nav-link">
                Services
                <span className="services-arrow">▼</span>
              </span>
              {isDropdownVisible && (
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/services/web-development">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/services/seo">SEO</Link>
                  </li>
                  <li>
                    <Link href="/services/google-ads">Google Ads</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/Pricing" className="nav-link">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/our-work" className="nav-link">
                Our Work
              </Link>
            </li>
            <li>
              <Link href="/insights" className="nav-link">
                Insights
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="header-buttons">
          <Link href="/contact" className="btn btn-primary">
            Get Started 
          </Link>
          <Link href="/SignIn" className="btn btn-outline">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
