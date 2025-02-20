import { AvatarCanvas } from "../avatar/AvatarCanvas";

export const CardPresentation = () => {
  return (
    <div className="relative bg-gray-950 flex flex-col md:flex-row items-center p-16 pl-10 pr-10 md:pl-40 md:pr-40 min-h-screen">
      <div className="flex flex-col md:text-left lg:max-w-2xl lg:mx-auto md:w-3/5 lg:mr-10">
        <span className="text-3xl items-start font-medium">Nosotros Somos</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-12">
          Valle del Software
        </h1>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-600 to-blue-700 rounded-lg blur-md"></div>
          <div className="relative border border-gray-800 rounded-lg bg-gray-900 p-6">
            <p className="text-lg p-1">
              Bienvid@ al Valle del Software, nosotros nos encargamos de realizar sus trabajos a nombre de Universitaria de Colombia, Valle del software es un grupo de desarrollo e investigacion comprometido con la innovacion tecnologica y la trasnformacion digital.
              Nuestro proposito es diseñar, desarrollar e implementar soluciones tecnologicas avanzadas que integren inteligencia artificial, mejorando asi la eficiencia y funcionalidad de aplicaciones y platadormas digitales.
              Nos enfocamos en la creacion de paginas web y aplicaciones inteligentes, empleando metodologias agiles y teconologias de vanguardia para ofrecer productos que se adapten a las necesidades del entorno digital actual.
            </p>
          </div>
        </div>

      </div>
      <section className=' lg:w-2/5 lg:ml-10 w-full mt-10'>
        <AvatarCanvas />
      </section>
    </div>
  );
}
