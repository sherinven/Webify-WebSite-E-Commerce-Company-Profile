
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="section-label">
            <span />
            GET IN TOUCH
          </div>

          <h2>
            Punya ide website?
            <br />
            <span>Let's make it happen.</span>
          </h2>

          <p>
            Setiap bisnis dan individu punya kebutuhan yang
            berbeda. Ceritakan ide website yang ingin kamu
            buat, dan temukan solusi yang paling sesuai.
          </p>

          <a href="#services" className="contact-button">
            Explore our services
            <span>↗</span>
          </a>
        </div>

        <div className="contact-side">
          <div className="contact-decoration">W.</div>

          <div className="contact-info-card">
            <span className="contact-info-number">
              01 / START
            </span>
            <h3>Tell us your idea.</h3>
            <p>
              Tentukan jenis website, tujuan, dan fitur
              yang kamu butuhkan.
            </p>
          </div>

          <div className="contact-info-card">
            <span className="contact-info-number">
              02 / CREATE
            </span>
            <h3>We'll build it together.</h3>
            <p>
              Rencanakan tampilan dan solusi website yang
              sesuai dengan kebutuhanmu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
