import { AvatarCanvas } from "./AvatarCanvas"

export const Avatar = () => {
  return (
    <div className="flex items-center p-16 pl-40 pr-40 min-h-screen">
      <div className="p-10 items-center">
        <h1 className="text-7xl">Valle del Software</h1>
        <p className="pt-8 text-xl">Bienvid@ al Valle del Software, nosotros nos encargamos de realizar sus trabajos a nombre de Universitaria de Colombia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda sapiente inventore maiores excepturi numquam pariatur doloremque alias optio porro. Molestiae libero sit temporibus modi soluta ipsum, beatae voluptate recusandae quis nihil, perspiciatis quae ipsam sint iste porro, laboriosam harum optio inventore voluptates? Eius tenetur excepturi fuga, pariatur labore illo architecto velit sapiente inventore? Porro ipsam ipsa repellendus, odio ducimus, accusantium cum molestias labore minima illum eius sit rem animi rerum nesciunt sequi repudiandae tempora! Quia incidunt aut sit unde.</p>
      </div>

      <section className='m-10'>
        <AvatarCanvas />
      </section>
    </div>
  )
}
