
import { useEffect, useRef } from "react";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";

const assets = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const getImage = (keyword) => {
  const entry = Object.entries(assets).find(([path]) =>
    path.toLowerCase().includes(keyword.toLowerCase())
  );

  return entry ? entry[1] : null;
};


const projects = [
  {
    number: "01",
    category: "Personal Website",
    title: "Personal Portfolio",
    description:
      "Website portfolio pribadi untuk menampilkan profil, kemampuan, dan project yang pernah dikerjakan.",
    image: getImage("portofolio"),
    link: "https://sherinportofolio.netlify.app/",
    tags: ["React", "CSS", "JavaScript"],
  },
  {
    number: "02",
    category: "Company Profile",
    title: "Aurora Parfume",
    description:
      "Website brand parfum dengan tampilan elegan untuk memperkenalkan produk dan identitas brand.",
    image: getImage("company-profile"),
    link: "https://aurora-parfume.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "03",
    category: "E-Commerce",
    title: "Mochi Luvvie",
    description:
      "Website penjualan mochi dengan tampilan menarik untuk memperkenalkan varian rasa dan produk.",
    image: getImage("web-e-commerce"),
    link: "https://mochi-luvvie.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".project-reveal");

    if (!elements) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <div className="projects-heading project-reveal">
          <div>
            <span className="section-label">
              <span className="label-dot"></span>
              SELECTED WORKS
            </span>
            <h2>
              Things We've <span>Created.</span>
            </h2>
          </div>

          <p>
            Beberapa website yang pernah dibuat sebagai bentuk eksplorasi
            desain dan pengembangan website.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card project-reveal"
              key={project.number}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-image-link"
              >
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} loading="lazy" />
                  ) : (
                    <div className="project-image-placeholder">
                      <span>{project.title}</span>
                      <small>Preview belum tersedia</small>
                    </div>
                  )}

                  <span className="project-open-icon">
                    <FaArrowUpRightFromSquare />
                  </span>
                </div>
              </a>

              <div className="project-info">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Visit Website <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
