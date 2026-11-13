import { useEffect, useRef } from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    number: "01",
    icon: <FaCode />,
    title: "Website Development",
    description:
      "Pembuatan website sesuai kebutuhan bisnis, mulai dari company profile, portfolio, hingga website UMKM.",
    tags: ["Modern Website", "Clean Code"],
  },
  {
    number: "02",
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description:
      "Desain tampilan website yang menarik, rapi, dan mudah digunakan agar pengunjung merasa nyaman.",
    tags: ["User Friendly", "Modern Design"],
  },
  {
    number: "03",
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Website yang bisa menyesuaikan berbagai ukuran layar, baik smartphone, tablet, maupun laptop.",
    tags: ["Mobile Friendly", "All Devices"],
  },
];

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".service-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-heading service-reveal">
          <span className="section-label">
            <span className="label-dot"></span>
            WHAT WE OFFER
          </span>

          <h2>
            What We Can <span>Do For You.</span>
          </h2>

          <p>
            Kami menyediakan layanan pembuatan website untuk membantu
            bisnis dan personal brand tampil lebih profesional di dunia digital.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className="service-card service-reveal"
              key={service.number}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="service-card-top">
                <div className="service-icon">{service.icon}</div>
                <span className="service-number">{service.number}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="service-card-bottom">
                <span>Explore service</span>
                <FaArrowRight />
              </div>
            </article>
          ))}
        </div>

        <div className="services-note service-reveal">
          <span className="note-star">✳</span>
          <p>
            Punya kebutuhan website yang berbeda? Kami bisa menyesuaikan
            layanan dengan kebutuhan project kamu.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
