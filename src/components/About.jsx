
import { useEffect, useRef } from "react";
import { FaArrowRight, FaCode, FaLaptopCode, FaMobileScreen } from "react-icons/fa6";

const features = [
  {
    icon: <FaLaptopCode />,
    number: "01",
    title: "Modern Design",
    description: "Tampilan website yang clean, menarik, dan sesuai karakter brand.",
  },
  {
    icon: <FaMobileScreen />,
    number: "02",
    title: "Responsive Layout",
    description: "Website tetap nyaman digunakan di HP, tablet, maupun laptop.",
  },
  {
    icon: <FaCode />,
    number: "03",
    title: "Built with Care",
    description: "Dibuat dengan memperhatikan detail, fungsi, dan pengalaman pengguna.",
  },
];

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    section.querySelectorAll(".about-reveal").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">

        <div className="about-intro about-reveal">
          <div className="section-label">
            <span></span>
            GET TO KNOW US
          </div>

          <h2>
            More than just a <span>website.</span>
          </h2>

          <p className="about-description">
            Webify adalah layanan pembuatan website yang membantu bisnis,
            UMKM, dan personal brand membangun kehadiran digital yang lebih
            profesional.
          </p>

          <p className="about-description secondary">
            Kami percaya setiap brand punya cerita dan identitasnya sendiri.
            Karena itu, website yang dibuat bukan hanya soal tampilan,
            tetapi juga bagaimana pengunjung merasa nyaman saat
            menggunakannya.
          </p>

          <a href="#services" className="about-cta">
            Explore our services <FaArrowRight />
          </a>
        </div>

        <div className="about-right">
          <div className="about-highlight about-reveal">
            <span className="highlight-number">01 / OUR APPROACH</span>
            <h3>
              Simple ideas, <br />
              <span>better digital experiences.</span>
            </h3>
            <p>
              Menggabungkan desain yang menarik dengan fungsi yang
              dibutuhkan agar website bisa bekerja dengan baik.
            </p>
            <div className="highlight-decoration">W.</div>
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <div
                className="about-feature about-reveal"
                key={feature.number}
                style={{ "--delay": `${index * 120}ms` }}
              >
                <div className="feature-icon">{feature.icon}</div>

                <div className="feature-content">
                  <span>{feature.number}</span>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>

                <FaArrowRight className="feature-arrow" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
