import '../ui/background.css'

export const AboutUs = () => {
  return (
    <section id="Sobre-Nosotros" className="bg-black-custom min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-8">
        Sobre Nosotros
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly w-full p-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className='relative group w-full lg:w-1/2'>
          <div className='absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 rounded-lg blur-md transition-all duration-500 group-hover:blur-none'></div>
          <div className="relative bg-gray-900 border border-gray-800 p-6 lg:p-8 rounded-lg shadow-lg overflow-hidden">
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-white mb-4">Nuestra Misión</h3>
            
            <div className='flex items-center justify-center mb-4'>
              <img 
                src="/Objetivo.svg" 
                alt="Logo Misión" 
                className='w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36'
              />
            </div>

            <p className="text-center text-sm md:text-base lg:text-lg">
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
        </div>

        <div className='relative group w-full lg:w-1/2'>
          <div className='absolute inset-0 bg-gradient-to-l from-sky-600 to-blue-700 rounded-lg blur-md transition-all duration-500 group-hover:blur-none'></div>
          <div className='relative bg-gray-900 border border-gray-800 p-6 lg:p-8 rounded-lg shadow-lg overflow-hidden'>
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-white mb-4">Nuestra Visión</h3>

            <div className='flex items-center justify-center mb-4'>
              <img 
                src='/Mision.svg'
                alt='Logo Visión'
                className='w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36'
              />
            </div>

            <p className="text-center text-sm md:text-base lg:text-lg">
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
    </section>
  )
}
