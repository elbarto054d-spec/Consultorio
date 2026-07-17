function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">
            Reseñas
          </span>

          <h2 className="section-title">
            Lo que dicen nuestros pacientes
          </h2>
        </div>

        <div className="testimonials-grid">

          <div className="testimonial-card">
            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p className="testimonial-text">
              "El Dr. Mendoza me atendió con mucha profesionalidad y
              calidez. El consultorio es limpio, moderno y el proceso de
              cita fue muy fácil."
            </p>

            <div className="testimonial-author">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Paciente"
              />

              <div>
                <strong>
                  Andrés Palma
                </strong>

                <span>
                  Paciente recurrente
                </span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p className="testimonial-text">
              "Llevo a mis hijos con el Dr. Sánchez desde hace 5 años.
              Su trato con los niños es excepcional y siempre nos da
              confianza."
            </p>

            <div className="testimonial-author">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                alt="Paciente"
              />

              <div>
                <strong>
                  Laura Jiménez
                </strong>

                <span>
                  Paciente recurrente
                </span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p className="testimonial-text">
              "Gracias a la Dra. Flores mi presión arterial está
              controlada. Su enfoque preventivo y la explicación clara
              de mi tratamiento hicieron toda la diferencia."
            </p>

            <div className="testimonial-author">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                alt="Paciente"
              />

              <div>
                <strong>
                  Pedro Gutiérrez
                </strong>

                <span>
                  Paciente recurrente
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
