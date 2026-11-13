
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <a href="#home" className="footer-logo">
            webify<span>.</span>
          </a>

          <p>
            Turning ideas into digital experiences.
            <br />
            Website solutions for your next step.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span className="footer-heading">EXPLORE</span>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
          </div>

          <div>
            <span className="footer-heading">MORE</span>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Webify. All rights reserved.
        </span>
        <span>
          Designed with purpose. Built with passion.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
