
function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">Servicios</span>
          <h2 className="section-title">Atención médica integral</h2>
          <p className="section-desc">
            Ofrecemos una amplia gama de servicios médicos para cuidar de ti y
            tu familia.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">&#128657;</div>
            <h3>Medicina General</h3>
            <p>
              Consultas de atención primaria, diagnóstico y tratamiento de
              enfermedades comunes.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">&#128149;</div>
            <h3>Cardiología</h3>
            <p>
              Evaluación y tratamiento de enfermedades del corazón y sistema
              circulatorio.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">&#128567;</div>
            <h3>Pediatría</h3>
            <p>
              Atención especializada para niños y adolescentes desde su
              nacimiento.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">&#128138;</div>
            <h3>Ginecología</h3>
            <p>
              Salud de la mujer, control prenatal y chequeos ginecológicos
              completos.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">&#128128;</div>
            <h3>Medicina Interna</h3>
            <p>
              Atención integral de enfermedades crónicas y condiciones
              complejas.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">&#128300;</div>
            <h3>Laboratorio Clínico</h3>
            <p>
              Análisis clínicos con resultados rápidos y precisos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

import { useState } from "react";
