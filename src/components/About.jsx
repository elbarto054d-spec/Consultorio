function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-img-frame">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80"
                alt="Consultorio Médico San José"
              />
            </div>

            <div className="about-badge">
              <span className="about-badge-icon">&#10003;</span>
              <span>Certificado por Salud Pública</span>
            </div>
          </div>

          <div className="about-text">
            <span className="section-label">
              Quiénes Somos
            </span>

            <h2 className="section-title">
              Comprometidos con tu salud y bienestar
            </h2>

            <p className="section-desc">
              En el Consultorio Médico San José brindamos atención médica
              integral con un equipo de profesionales altamente capacitados.
              Nuestra filosofía se basa en la{" "}
              <strong>medicina preventiva</strong>, el{" "}
              <strong>trato humano</strong> y la{" "}
              <strong>excelencia clínica</strong>.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">&#128137;</div>

                <div>
                  <h4>Equipo Multidisciplinario</h4>
                  <p>
                    Médicos generales, especialistas y personal de
                    enfermería.
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon">&#128197;</div>

                <div>
                  <h4>Atención por Cita</h4>
                  <p>
                    Agenda tu consulta en línea sin filas ni esperas.
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon">&#128154;</div>

                <div>
                  <h4>Medicina Preventiva</h4>
                  <p>
                    Chequeos regulares para mantener tu salud al día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
