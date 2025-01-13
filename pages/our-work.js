import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function OurWork() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform with custom features and seamless checkout integration.",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
    {
      title: "SEO Campaign for Small Business",
      description:
        "Achieved a 200% increase in organic traffic through advanced SEO strategies and keyword optimization.",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed a visually stunning portfolio website to highlight creative work for a freelance designer.",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
    {
      title: "Google Ads Optimization",
      description:
        "Optimized ad campaigns for a growing business, leading to a 300% ROI increase.",
      image: "https://via.placeholder.com/600x400",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="our-work-hero">
        <div className="hero-content">
          <h1>Our Work</h1>
          <p>
            Explore some of our recent projects and success stories. From web
            development to SEO campaigns, we deliver results.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="project-image"
              />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project
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
