
export const ContactForm = () => {
  return (
    <div id="Contactanos" className="p-5 min-h-screen">
      <h2 className="text-start text-6xl">Contactanos</h2>
      <p className="pt-5 text-xl mb-5">Contacta con nosotros para ver en que podemos coloborarte</p>

      <div className="flex flex-row">
        <form action="submit">
          <div className="flex flex-wrap gap-4 mb-4">
            <input type="text" placeholder="Primer Nombre" className="flex-grow p-2 border rounded"/>
            <input type="text" placeholder="Segundo Nombre" className="flex-grow p-2 border rounded"/>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <input type="email" placeholder="Correo Electronico" className="flex-grow p-2 border rounded"/>
            <input type="number" placeholder="Telefono" className="flex-grow p-2 border rounded"/>
          </div>

          <div className="mb-4">
            <select className="w-full p-2 border rounded">
              <option value="">--Por favor, seleccione una opción--</option>
              <option value="Servicios">Servicios</option>
            </select>
          </div>

          <div>
            <textarea placeholder="Mensaje" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Enviar</button>
        </form>

      </div>
 
    </div>
  )
}
