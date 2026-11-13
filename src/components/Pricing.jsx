
const pricingData = [
  {
    number: "01",
    title: "Personal Portfolio",
    description:
      "Kumpulan hasil karya, proyek, dan pengalaman untuk menunjukkan keahlian secara profesional.",
    price: "Rp950.000 – Rp2.000.000",
    period: "Sekali bayar",
    features: [
      "Desain sesuai kebutuhan",
      "Responsive desktop & mobile",
      "Profil dan galeri proyek",
      "Tampilan profesional",
    ],
  },
  {
    number: "02",
    title: "Company Profile",
    description:
      "Website profesional untuk memperkenalkan identitas, layanan, dan nilai perusahaan.",
    price: "Rp1.250.000 – Rp2.500.000",
    period: "Sekali bayar",
    features: [
      "Informasi perusahaan",
      "Halaman layanan",
      "Desain sesuai identitas brand",
      "Responsive desktop & mobile",
    ],
    popular: true,
  },
  {
    number: "03",
    title: "Maintenance",
    description:
      "Perawatan berkala agar website tetap aman, stabil, dan berjalan dengan baik.",
    price: "Rp350.000 – Rp500.000",
    period: "Per tahun",
    features: [
      "Pembaruan keamanan",
      "Optimasi performa",
      "Perbaikan bug",
      "Backup data rutin",
    ],
  },
  {
    number: "04",
    title: "Hosting",
    description:
      "Penyimpanan file, database, gambar, dan source code agar website dapat diakses secara online.",
    price: "Rp400.000 – Rp700.000",
    period: "Per tahun",
    features: [
      "Penyimpanan file website",
      "Database website",
      "Akses website secara online",
      "Hosting selama 1 tahun",
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-heading">
          <div className="section-label">
            <span />
            PRICING & PACKAGES
          </div>

          <h2>
            Investasi untuk
            <br />
            <span>website impianmu.</span>
          </h2>

          <p>
            Pilih layanan yang sesuai dengan kebutuhanmu.
            Kami menyediakan solusi website dengan harga
            yang tetap terjangkau.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingData.map((item) => (
            <article className="pricing-card" key={item.number}>
              {item.popular && (
                <span className="pricing-popular">
                  RECOMMENDED
                </span>
              )}

              <div className="pricing-card-top">
                <span>{item.number}</span>
                <span>WEBIFY SERVICE</span>
              </div>

              <h3>{item.title}</h3>

              <p className="pricing-description">
                {item.description}
              </p>

              <div className="pricing-price">
                <strong>{item.price}</strong>
                <span>{item.period}</span>
              </div>

              <div className="pricing-divider" />

              <p className="pricing-feature-title">
                Yang kamu dapatkan:
              </p>

              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>
                    <span className="pricing-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="pricing-button">
                Konsultasi layanan
                <span>↗</span>
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          * Harga dapat menyesuaikan kebutuhan, fitur, dan
          tingkat kompleksitas website.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
