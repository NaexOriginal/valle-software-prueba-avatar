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

        <div id="Servicios" className="p-5 min-h-screen bg-gray-950 ">
          <h2 className="text-center md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-6">Servicios</h2>
          
          {/* Contenedor Flexbox para centrar los cuadros verticalmente */}
          <div className="flex flex-col items-center gap-12"> {/* Añadido gap-12 para espacio entre los cuadros */}
            <div className="w-full max-w-4xl">
              <Card>
                <h3 className="text-center text-4xl">Desarrollo Inteligencia Artificial</h3>
                <p className="text-center mt-4">
                Creamos páginas web innovadoras, integrando inteligencia artificial para llevar tu negocio al siguiente nivel en el mercado tecnológico, Valle Del Software es un grupo innovador dedicado al desarrollo de soluciones avanzadas en Inteligencia Artificial. Nuestro equipo de expertos se especializa en crear tecnologías inteligentes que impulsan el progreso en diversos sectores, desde la automatización de procesos hasta el análisis predictivo. En Valle Del Software, estamos comprometidos con el avance continuo en IA, fusionando conocimientos técnicos con una visión ética para ofrecer soluciones que no solo transforman industrias, sino que también mejoran la calidad de vida. Únete a nosotros y descubre cómo nuestra experiencia en Inteligencia Artificial está marcando la diferencia.
                </p>
                <div className="mt-6 flex justify-center items-center">
                  <GlowBorder>
                    <img 
                    src="/Desarrollo-Web.svg" 
                    alt="Logo desarrollo web" 
                    className="h-48 w-48 rounded-full" /> {/* Aumentado el tamaño de la imagen */}
                  </GlowBorder>
                </div>
              </Card>
            </div>

            <div className="w-full max-w-4xl">
              <Card>
                <h3 className="text-center text-4xl">Aplicaciones Móviles En Inteligencia Artificial</h3>
                <p className="text-center mt-4">
                  Valle Del Software también se destaca en el desarrollo de aplicaciones móviles innovadoras. Nuestro equipo se especializa en crear aplicaciones intuitivas y funcionales que brindan experiencias excepcionales a los usuarios en dispositivos iOS y Android. Desde aplicaciones empresariales hasta soluciones personalizadas para necesidades específicas, nos enfocamos en ofrecer productos de alta calidad que optimizan la eficiencia y mejoran la interacción del usuario. Aprovechamos las últimas tecnologías y tendencias para asegurarnos de que cada aplicación no solo cumpla con las expectativas, sino que las supere. Explora cómo nuestras soluciones móviles pueden transformar tu visión en una experiencia digital fluida y efectiva.
                </p>
                <div className="mt-6 flex justify-center items-center">
                  <GlowBorder>
                  <img
                      src="/Movil.svg" 
                      alt="Logo Desarrollo Movil" 
                      className="h-48 w-48 rounded-full" /> {/* Aumentado el tamaño de la imagen */}
                  </GlowBorder>
                </div>
              </Card>
            </div>

            <div className="w-full max-w-4xl">
              <Card>
                <h3 className="text-center text-4xl">Otros</h3>
                <p className="text-center mt-4">         
                  Otros proyectos en Valle Del Software abarcan una variedad de iniciativas tecnológicas y creativas. Además de nuestro enfoque en Inteligencia Artificial y aplicaciones móviles, exploramos y desarrollamos soluciones innovadoras en diferentes áreas, siempre con el objetivo de resolver problemas y ofrecer valor agregado. Nuestro equipo está abierto a nuevos desafíos y constantemente busca maneras de aplicar la tecnología para mejorar y facilitar diversos aspectos de la vida y los negocios.
                </p>
                <div className="mt-6 flex justify-center items-center">
                  <GlowBorder>
                  <img
                      src="/Entre-Otros.svg" 
                      alt="Logo Desarrollo Extra" 
                      className="h-48 w-48 rounded-full" /> {/* Aumentado el tamaño de la imagen */}
                  </GlowBorder>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <CardEmployed />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
