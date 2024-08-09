import { AboutUs } from "../components/aboutUs/AboutUs";
import { CardEmployed } from "../components/cardEmployed/CardEmployed";
import { CardPresentation } from "../components/cardPresentation/CardPresetation";
import { ContactForm } from "../components/contactForm/ContactForm";
import { Footer } from "../components/footer/Footer";
import { NavBarSticky } from "../components/navbar/NavBarSticky";

export const LandingPage = () => {
  return (
    <div className="text-white bg-slate-950">
      <NavBarSticky />

      <main>
        <CardPresentation />
        <AboutUs /> {/* Aquí se integra el componente AboutUs */}

        <div id="Servicios" className="p-5 min-h-screen bg-gray-950 ">
          <h2 className="text-center md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-6">Servicios</h2>

          <div className="flex flex-col pt-14 space-y-8">
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
              <h3 className="text-center text-4xl">Desarrollo Web</h3>
              <p className="text-center">
                Creamos páginas web innovadoras, integrando inteligencia
                artificial para llevar tu negocio al siguiente nivel en el mercado
                tecnológico.
              </p>

              <div className="mt-6 flex justify-center items-center">
                <span className="p-2 rounded-full bg-slate-50">
                  <img
                    src="/Desarrollo-Web.svg" 
                    alt="Logo desarrollo web" 
                    className="h-36 w-36 rounded-full"
                  />
                </span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
              <h3 className="text-center text-4xl">Aplicaciones Móviles</h3>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis saepe, illo modi ea magnam ex hic. Aliquid,
                necessitatibus vitae perspiciatis a cum perferendis, eveniet amet
                deleniti tempore ullam, assumenda nulla.
              </p>

              <div className="mt-6 flex justify-center items-center">
                <span className="p-2 rounded-full bg-slate-50">
                  <img
                    src="/Movil.svg" 
                    alt="Logo Desarrollo Movil" 
                    className="h-36 w-36 rounded-full"
                  />
                </span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
              <h3 className="text-center text-4xl">Otros</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                dignissimos at aspernatur ipsa odit officia accusamus excepturi id
                alias nobis ex est expedita iure reprehenderit magni quam,
                suscipit quos commodi.
              </p>

              <div className="mt-6 flex justify-center items-center">
                <span className="p-2 rounded-full bg-slate-50">
                  <img
                    src="/Entre-Otros.svg" 
                    alt="Logo Desarrollo Extra" 
                    className="h-36 w-36 rounded-full"
                  />
                </span>
              </div>
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
