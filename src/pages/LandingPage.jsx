import styled, { keyframes } from 'styled-components';
import { AboutUs } from "../components/aboutUs/AboutUs";
import { CardEmployed } from "../components/cardEmployed/CardEmployed";
import { CardPresentation } from "../components/cardPresentation/CardPresetation";
import { ContactForm } from "../components/contactForm/ContactForm";
import { Footer } from "../components/footer/Footer";
import { NavBarSticky } from "../components/navbar/NavBarSticky";

const glowing = keyframes`
  0% { filter: brightness(100%); }
  50% { filter: brightness(150%); }
  100% { filter: brightness(100%); }
`;

const Card = styled.div`
  background-color: #1f2937;
  border: 1px solid #374151;
  padding: 3rem;  /* Aumentado para hacer el cuadro más grande */
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(14, 165, 233, 0.6), 0px 0px 20px rgba(14, 165, 233, 0.4); /* Ajustado a un azul oscuro */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%; /* Ocupa el 100% del ancho del contenedor padre */
  max-width: 600px; /* Ancho máximo del cuadro */
  margin: 0 auto; /* Centrado horizontal */
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 20px rgba(14, 165, 233, 0.8), 0px 0px 40px rgba(14, 165, 233, 0.6); /* Efecto de borde iluminado más intenso en azul oscuro al hacer hover */
  }
`;

const GlowBorder = styled.span`
  border: 2px solid transparent;
  background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(to right, #0284c7, #1e40af); /* Gradiente azul oscuro */
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: ${glowing} 1.5s infinite;
`;

export const LandingPage = () => {
  return (
    <div className="text-white bg-slate-950">
      <NavBarSticky />

      <main>

        <CardPresentation />
        <AboutUs />

        <div id="Servicios" className="p-5 min-h-screen bg-gray-950">
          <h2 className="text-center md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-6">
            Servicios
          </h2>

          <div className="flex flex-row flex-wrap justify-center gap-6">
            <Card>
              <h3 className="text-center text-4xl">Desarrollo Inteligencia Artificial</h3>
              <p className="text-center mt-4">
                Valle Del Software desarrolla soluciones innovadoras en inteligencia artificial para
                impulsar negocios y transformar industrias. Su equipo de expertos crea tecnologías
                avanzadas en automatización y análisis predictivo, combinando innovación con una
                visión ética para mejorar la calidad de vida.
              </p>
              <div className="mt-6 flex justify-center items-center">
                <GlowBorder>
                  <img src="/Desarrollo-Web.svg" alt="Logo desarrollo web" className="h-48 w-48 rounded-full" />
                </GlowBorder>
              </div>
            </Card>

            <Card>
              <h3 className="text-center text-4xl">Aplicaciones Móviles En Inteligencia Artificial</h3>
              <p className="text-center mt-4">
                Valle Del Software desarrolla aplicaciones móviles innovadoras para iOS y Android,
                creando experiencias intuitivas y funcionales. Su equipo diseña soluciones personalizadas
                y empresariales, optimizando la eficiencia y mejorando la interacción del usuario con
                tecnología de vanguardia.
              </p>
              <div className="mt-6 flex justify-center items-center">
                <GlowBorder>
                  <img src="/Movil.svg" alt="Logo Desarrollo Movil" className="h-48 w-48 rounded-full" />
                </GlowBorder>
              </div>
            </Card>

            <Card>
              <h3 className="text-center text-4xl">Otros</h3>
              <p className="text-center mt-4">
                Valle Del Software impulsa iniciativas tecnológicas y creativas, explorando soluciones
                innovadoras más allá de la IA y las aplicaciones móviles. Su equipo afronta nuevos desafíos
                para aplicar tecnología que mejore la vida y los negocios.
              </p>
              <div className="mt-6 flex justify-center items-center">
                <GlowBorder>
                  <img src="/Entre-Otros.svg" alt="Logo Desarrollo Extra" className="h-48 w-48 rounded-full" />
                </GlowBorder>
              </div>
            </Card>
          </div>
        </div>

        <div id="Proyectos" className="p-5 bg-gray-950">
          <h2 className="text-center md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-6">Proyectos Realizados</h2>
          <br />
          <div className="flex flex-wrap justify-center gap-6">
            <Card>
              <h3 className="text-center text-3xl">Bolsa de Empleo</h3>
              <p className="text-center mt-4">API de gestión de empleo que centraliza múltiples bolsas de trabajo y plataformas empresariales, permitiendo a las empresas publicar ofertas, a los usuarios postularse y optimizar su perfil con IA, mejorando la conexión entre talento y oportunidades laborales.</p>
              <div className="mt-4 text-center">
                {/* <a href="https://github.com/usuario/repositorio1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Ver en GitHub</a> */}
              </div>
              <div className="mt-6 flex justify-center items-center">
                <GlowBorder>
                  <img src="/briefcase.png" alt="Logo desarrollo web" className="h-48 w-48 " />
                </GlowBorder>
              </div>
            </Card>
            <Card>
              <h3 className="text-center text-3xl">Biometricos</h3>
              <p className="text-center mt-4">Sistema de gestión de asistencia para docentes que registra entradas y salidas, envía notificaciones automatizadas por WhatsApp y realiza análisis de datos para optimizar el control y seguimiento..</p>
              <div className="mt-4 text-center">
                {/* <a href="https://github.com/usuario/repositorio2" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Ver en GitHub</a> */}
              </div>
              <div className="mt-6 flex justify-center items-center">
                <GlowBorder>
                  <img src="/touch-id.png" alt="Logo desarrollo web" className="h-48 w-48 " />
                </GlowBorder>
              </div>
            </Card>
            <Card>
              <h3 className="text-center text-3xl">Consultorio Psciologico</h3>
              <p className="text-center mt-4">El proyecto "Consultorio Psicológico" es una plataforma web para gestionar pacientes, personal y citas. Permite registrar y administrar historiales clínicos, agendar citas y visualizar información relevante, optimizando la atención psicológica.</p>
              <div className="mt-4 text-center">
                {/* <a href="https://github.com/usuario/repositorio2" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Ver en GitHub</a> */}
              </div>
              <div className="mt-6 flex justify-center items-center">
                <GlowBorder>
                  <img src="/psychology.png" alt="Logo desarrollo web" className="h-48 w-48 " />
                </GlowBorder>
              </div>
            </Card>
            <Card>
              <h3 className="text-center text-3xl">IPS</h3>
              <p className="text-center mt-4">Sistema integral para IPS que unifica tres soluciones en una: gestión de turnos mediante pantalla interactiva, comunicación interna a través de un chat para el personal y agendamiento eficiente de citas, optimizando la atención y coordinación.</p>
              <div className="mt-4 text-center">
                {/* <a href="https://github.com/usuario/repositorio2" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">Ver en GitHub</a> */}
              </div>
              <div className="mt-6 flex justify-center items-center">
                <GlowBorder>
                  <img src="/hospital.png" alt="Logo desarrollo web" className="h-48 w-48 " />
                </GlowBorder>
              </div>
            </Card>
          </div>
        </div>

        <CardEmployed />
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </div>
  );
};
