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
                <h3 className="text-center text-4xl">Desarrollo Web</h3>
                <p className="text-center mt-4">
                  Creamos páginas web innovadoras, integrando inteligencia artificial para llevar tu negocio al siguiente nivel en el mercado tecnológico.
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
                <h3 className="text-center text-4xl">Aplicaciones Móviles</h3>
                <p className="text-center mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis saepe, illo modi ea magnam ex hic. Aliquid,
                  necessitatibus vitae perspiciatis a cum perferendis, eveniet amet
                  deleniti tempore ullam, assumenda nulla.
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                  dignissimos at aspernatur ipsa odit officia accusamus excepturi id
                  alias nobis ex est expedita iure reprehenderit magni quam,
                  suscipit quos commodi.
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
