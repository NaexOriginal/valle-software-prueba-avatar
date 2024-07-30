import { Avatar } from "../components/avatar/Avatar"
import { CardEmployed } from "../components/cardEmployed/CardEmployed"
import { ContactForm } from "../components/contactForm/ContactForm"
import { Footer } from "../components/footer/Footer"
import { NavBarSticky } from "../components/navbar/NavBarSticky"

export const LandingPage = () => {
  return (
    <div className="bg-gray-950 text-white">
      <NavBarSticky />
      <Avatar />


      <div id="Sobre-Nosotros" className="min-h-screen">
        <h2 className="text-center text-6xl ">Sobre Nosotros</h2>

        <div className="flex">
          <div className="p-10">
            <h3 className="text-4xl text-center mb-5">Nuestra Misión</h3>
            <p className="text-center">En "El valle del software", nuestra misión es innovar y transformar el panorama tecnológico mediante el desarrollo de soluciones de inteligencia artificial de vanguardia. Nos dedicamos a crear proyectos que impulsen la eficiencia y la evolución en diversas áreas del mercado tecnológico, proporcionando herramientas inteligentes que potencien el crecimiento y la competitividad de nuestros clientes. Trabajamos con pasión y compromiso para convertir ideas en realidades que cambian el mundo.</p>
          </div>

          <div className="p-10">
            <h3 className="text-4xl text-center mb-5">Nuestra Visión</h3>
            <p className="text-center">Nuestra visión en "El valle del software" es ser reconocidos como líderes globales en el desarrollo de tecnologías de inteligencia artificial, estableciendo nuevos estándares de excelencia e innovación en la industria. Aspiramos a construir un ecosistema donde la creatividad y la tecnología se entrelacen, generando un impacto positivo y duradero en el futuro del mercado tecnológico. Queremos ser el puente que conecta a las empresas con soluciones inteligentes que transformen su manera de operar y crecer.</p>
          </div>
        </div>
      </div>

      <div 
        id="Servicios"
        className="p-5 min-h-screen"
      >
        <h2 className="text-center text-6xl">Servicios</h2>
        
        <div className="flex flex-col pt-14 space-y-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-center text-4xl">Desarrollo Web</h3>
            <p className="text-center">Creamos páginas web innovadoras, integrando inteligencia artificial para llevar tu negocio al siguiente nivel en el mercado tecnológico.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-center text-4xl">Aplicaciones Moviles</h3>
            <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis saepe, illo modi ea magnam ex hic. Aliquid, necessitatibus vitae perspiciatis a cum perferendis, eveniet amet deleniti tempore ullam, assumenda nulla.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-center text-4xl">Otros</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dignissimos at aspernatur ipsa odit officia accusamus excepturi id alias nobis ex est expedita iure reprehenderit magni quam, suscipit quos commodi.</p>
          </div>
        </div>
      </div>
      
      <CardEmployed />
      <ContactForm />
      <Footer />
    </div>
  )
}
