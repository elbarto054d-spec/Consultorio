function Footer({abrirFormulario}) {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-brand">

            <div className="footer-logo">
              <span className="logo-icon">
                <i className="fa-solid fa-user-doctor"></i>
              </span>

              <h3>
                San José
              </h3>
            </div>

            <p>
              Cuidamos de tu salud con calidez humana y excelencia médica.
              Tu bienestar es nuestra prioridad.
            </p>

            <div className="footer-social">

              <a href="#" aria-label="Facebook">
                FB
              </a>

              <a href="#" aria-label="Instagram">
                IG
              </a>

              <a href="#" aria-label="Twitter">
                TW
              </a>

              <a href="#" aria-label="WhatsApp">
                WA
              </a>

            </div>

          </div>

          <div className="footer-links">

            <h4>
              Servicios
            </h4>

            <ul>

              <li>
                <a href="#services">
                  Medicina General
                </a>
              </li>

              <li>
                <a href="#services">
                  Cardiología
                </a>
              </li>

              <li>
                <a href="#services">
                  Pediatría
                </a>
              </li>

              <li>
                <a href="#services">
                  Ginecología
                </a>
              </li>

              <li>
                <a href="#services">
                  Laboratorio
                </a>
              </li>

            </ul>

          </div>

          <div className="footer-links">

            <h4>
              Enlaces
            </h4>

            <ul>

              <li>
                <a href="#about">
                  Nosotros
                </a>
              </li>

              <li>
                <a href="#doctors">
                  Médicos
                </a>
              </li>

              <li>
                <a href="#testimonials">
                  Reseñas
                </a>
              </li>

              <li>
                          <button
className="btn btn-sm"
onClick={abrirFormulario}
>
Agendar
</button>
              </li>

            </ul>

          </div>

          <div className="footer-hours">

            <h4>
              Horarios
            </h4>

            <ul>

              <li>
                <span>
                  Lun - Vie
                </span>

                <span>
                  8:00 - 20:00
                </span>
              </li>

              <li>
                <span>
                  Sábado
                </span>

                <span>
                  8:00 - 14:00
                </span>
              </li>

              <li>
                <span>
                  Domingo
                </span>

                <span>
                  Cerrado
                </span>
              </li>

            </ul>

            <div className="footer-emergency">

              <span>
                Emergencias 24h
              </span>

              <strong>
                +593 98 5864 554
              </strong>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            &copy; 2026 Consultorio Médico San José.
            Todos los derechos reservados.
          </p>

        </div>

      </div>

      <div className="toast" id="toast"></div>

    </footer>
  );
}

export default Footer;
