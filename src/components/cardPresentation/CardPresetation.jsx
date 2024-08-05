import { AvatarCanvas } from "../avatar/AvatarCanvas";

export const CardPresentation = () => {
  return (
    <div className="relative bg-gray-950 flex flex-col md:flex-row items-center p-16 pl-10 pr-10 md:pl-40 md:pr-40 min-h-screen">
      <div className="flex flex-col md:text-left max-w-2xl mx-auto">
        <span className="text-3xl items-start font-medium">Nosotros Somos</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-12">
          Valle del Software
        </h1>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-600 to-blue-700 rounded-lg blur-md"></div>
          <div className="relative border border-gray-800 rounded-lg bg-gray-900 p-6">
            <p className="text-lg p-1">
              Bienvid@ al Valle del Software, nosotros nos encargamos de realizar sus trabajos a nombre de Universitaria de Colombia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda sapiente inventore maiores excepturi numquam pariatur doloremque alias optio porro. Molestiae libero sit temporibus modi soluta ipsum, beatae voluptate recusandae quis nihil, perspiciatis quae ipsam sint iste porro, laboriosam harum optio inventore voluptates? Eius tenetur excepturi fuga, pariatur labore illo architecto velit sapiente inventore? Porro ipsam ipsa repellendus, odio ducimus, accusantium cum molestias labore minima illum eius sit rem animi rerum nesciunt sequi repudiandae tempora! Quia incidunt aut sit unde.
            </p>
          </div>
        </div>
        
      </div>
      <section className='m-10 md:m-0'>
        <AvatarCanvas />
      </section>
    </div>
  );
}
