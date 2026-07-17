function Hero({abrirFormulario}) {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-badge">Consultorio Médico</span>

        <h1 className="hero-title">San José</h1>

        <p className="hero-subtitle">
          Cuidamos de tu salud con calidez humana y excelencia médica.
          Tu bienestar es nuestra prioridad.
        </p>

        <div className="hero-actions">
          <button
className="btn btn-primary"
onClick={abrirFormulario}
>
Agendar Cita
</button>

          <a href="#services" className="btn btn-outline">
            Nuestros Servicios
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">15+</span>
            <span className="hero-stat-label">
              Años de experiencia
            </span>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-num">50K+</span>
            <span className="hero-stat-label">
              Pacientes atendidos
            </span>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-num">98%</span>
            <span className="hero-stat-label">
              Satisfacción
            </span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Descubre</span>

        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


