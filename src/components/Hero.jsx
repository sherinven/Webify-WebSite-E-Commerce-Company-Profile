import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaStar,
  FaCode,
  FaGlobe,
} from "react-icons/fa6";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-tag", {
        y: 25,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".hero-title",
          {
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-note",
          {
            y: 15,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".hero-visual",
          {
            scale: 0.92,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );

      gsap.to(".visual-glow", {
        scale: 1.15,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-badge", {
        y: -12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.7,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-content">

        <div className="hero-tag">
          <span className="tag-dot"></span>
          Digital solution for modern businesses
        </div>

        <h1 className="hero-title">
          Your business,
          <br />
          <span>better online.</span>
        </h1>

        <p className="hero-description">
          Webify membantu kamu membuat website modern,
          profesional, dan responsif untuk portfolio,
          company profile, maupun kebutuhan bisnis kamu.
        </p>

        <div className="hero-actions">

          <a href="#services" className="hero-button">
            Mulai Project
            <FaArrowRight />
          </a>

          <a href="#projects" className="hero-secondary">
            Lihat Project
            <FaArrowUpRightFromSquare />
          </a>

        </div>

        <div className="hero-note">
          <span>01</span>

          <div></div>

          <p>
            Build a professional digital presence.
          </p>
        </div>

      </div>

      <div className="hero-visual">

        <div className="visual-glow"></div>

        <div className="visual-card">

          <div className="visual-top">

            <div className="visual-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>webify.studio</p>

            <span className="visual-icon">
              <FaStar />
            </span>

          </div>

          <div className="visual-main">

            <span className="visual-label">
              DIGITAL PRESENCE
            </span>

            <h2>
              Make your
              <br />
              brand <span>visible.</span>
            </h2>

            <p>
              Professional websites for brands,
              businesses, and personal portofolio.
            </p>

            <div className="visual-shape">

              <div className="shape-circle">
                <FaCode />
              </div>

              <div className="shape-square">
                <FaGlobe />
              </div>

              <div className="shape-line"></div>

            </div>

          </div>

          <div className="visual-bottom">
            <span>DESIGN · DEVELOPMENT</span>
            <span>© WEBIFY 2026</span>
          </div>

        </div>

        <div className="floating-badge badge-one">
          <span>✦</span>
          Professional Design
        </div>

        <div className="floating-badge badge-two">
          <span>↗</span>
          Ready to Grow
        </div>

      </div>
    </section>
  );
}