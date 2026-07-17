function Doctors({abrirFormulario}) {
  return (
    <section className="doctors section" id="doctors">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Nuestro Equipo</span>

          <h2 className="section-title">
            Conoce a nuestros médicos
          </h2>

          <p className="section-desc">
            Profesionales comprometidos con tu salud y bienestar.
          </p>
        </div>

        <div className="doctors-grid">
          <div className="doctor-card">
            <div className="doctor-img">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80"
                alt="Dr. Carlos Mendoza"
              />
            </div>

            <div className="doctor-info">
              <h3>Dr. Carlos Mendoza</h3>

              <span className="doctor-specialty">
                Medicina General
              </span>

              <p>
                Médico cirujano con 20 años de experiencia en atención
                primaria.
              </p>

              <div className="doctor-contact">
           <button
className="btn btn-sm"
onClick={abrirFormulario}
>
Agendar
</button>
              </div>
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-img">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80"
                alt="Dra. María Flores"
              />
            </div>

            <div className="doctor-info">
              <h3>Dra. María Flores</h3>

              <span className="doctor-specialty">
                Cardiología
              </span>

              <p>
                Especialista en cardiología preventiva y rehabilitación
                cardíaca.
              </p>

              <div className="doctor-contact">
              <button
className="btn btn-sm"
onClick={abrirFormulario}
>
Agendar
</button>
              </div>
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-img">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
                alt="Dr. Roberto Sánchez"
              />
            </div>

            <div className="doctor-info">
              <h3>Dr. Roberto Sánchez</h3>

              <span className="doctor-specialty">
                Pediatría
              </span>

              <p>
                Pediatra con enfoque en desarrollo infantil y nutrición
                pediátrica.
              </p>

              <div className="doctor-contact">
            <button
className="btn btn-sm"
onClick={abrirFormulario}
>
Agendar
</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctors; 
