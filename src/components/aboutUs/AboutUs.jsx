import '../ui/background.css'

export const AboutUs = () => {
  return (
    <div id="Sobre-Nosotros" className="bg-black-custom min-h-screen flex flex-col items-center justify-center ">
      <h2 className="text-center md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-24">
        Sobre Nosotros
      </h2>

      <div className="flex flex-col items-center justify-center w-full p-8">
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto mb-8 max-h-96 overflow-y-auto">
          <h3 className="text-5xl text-center mb-5 text-white">Nuestra Misión</h3>
          <p className="text-center text-lg">
            En El valle del software, nuestra misión es innovar y transformar
            el panorama tecnológico mediante el desarrollo de soluciones de
            inteligencia artificial de vanguardia. Nos dedicamos a crear
            proyectos que impulsen la eficiencia y la evolución en diversas
            áreas del mercado tecnológico, proporcionando herramientas
            inteligentes que potencien el crecimiento y la competitividad de
            nuestros clientes. Trabajamos con pasión y compromiso para
            convertir ideas en realidades que cambian el mundo.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto mb-8 max-h-96 overflow-y-auto">
          <h3 className="text-5xl text-center mb-5 text-white">Nuestra Visión</h3>
          <p className="text-center text-lg">
            Nuestra visión en El valle del software es ser reconocidos como
            líderes globales en el desarrollo de tecnologías de inteligencia
            artificial, estableciendo nuevos estándares de excelencia e
            innovación en la industria. Aspiramos a construir un ecosistema
            donde la creatividad y la tecnología se entrelacen, generando un
            impacto positivo y duradero en el futuro del mercado tecnológico.
            Queremos ser el puente que conecta a las empresas con soluciones
            inteligentes que transformen su manera de operar y crecer.
          </p>
        </div>
      </div>
    </div>
  )
}
