
export const ContactForm = () => {
  return (
    <div className="p-5">
      <h2 className="text-start text-6xl">Contactanos</h2>
      <p className="pt-5 text-xl">Contacta con nosotros para ver en que podemos coloborarte</p>

      <div className="flex flex-row">
        <form action="submit">
          <span>
            <input type="text" placeholder="Primer Nombre" className=""/>
            <input type="text" placeholder="Segundo Nombre" className="border-gray-950"/>
          </span>

          <span>
            <input type="email" placeholder="Correo Electronico"/>
            <input type="number" placeholder="Telefono"/>
          </span>

          <span>
            <select>
              <option value="">--Por favor, seleccione una opción--</option>
              <option value="Servicios">Servicios</option>
            </select>
          </span>

          <span>
            <textarea placeholder="Mensaje"></textarea>
          </span>
          <button type="submit">Enviar</button>
        </form>

      </div>
 
    </div>
  )
}
