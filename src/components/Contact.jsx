function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">

          <div className="contact-info">
            <span className="section-label">
              Contacto
            </span>

            <h2 className="section-title">
              Estamos para ayudarte
            </h2>

            <div className="contact-details">

              <div className="contact-item">
                <div className="contact-icon">
                  &#128205;
                </div>

                <div>
                  <h4>Dirección</h4>
                  <p>
                    Av. 6 de Diciembre y Naciones Unidas
                    <br />
                    Quito, Pichincha, Ecuador
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  &#128222;
                </div>

                <div>
                  <h4>Teléfono</h4>
                  <p>
                    +593 2 234 5678
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  &#128231;
                </div>

                <div>
                  <h4>Email</h4>

                  <p>
                    contacto@consultoriosanjose.com.ec
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  &#128338;
                </div>

                <div>
                  <h4>Horarios</h4>

                  <p>
                    Lunes - Viernes: 08:00 - 18:00
                    <br />
                    Sábado: 08:00 - 13:00
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="contact-map">

            <iframe
              src="https://www.google.com/maps?q=Av.+6+de+Diciembre+y+Naciones+Unidas,+Quito,+Ecuador&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Consultorio"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
