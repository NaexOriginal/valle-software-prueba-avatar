export const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950">
      <div id="Contactanos" className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-white text-center text-6xl mb-6">Contáctanos</h2>
        <p className="text-white text-center text-xl mb-8">Contacta con nosotros para ver en qué podemos colaborarte</p>
        <form action="submit">
          <div className="text-black flex flex-wrap gap-4 mb-4">
            <input type="text" placeholder="Primer Nombre" className="flex-grow p-2 border rounded"/>
            <input type="text" placeholder="Segundo Nombre" className="flex-grow p-2 border rounded"/>
          </div>
          <div className="text-black flex flex-wrap gap-4 mb-4">
            <input type="email" placeholder="Correo Electrónico" className="flex-grow p-2 border rounded"/>
            <input type="number" placeholder="Teléfono" className="flex-grow p-2 border rounded"/>
          </div>
          <div className="mb-4">
            <select className="text-black w-full p-2 border rounded">
              <option value="">--Por favor, seleccione una opción--</option>
              <option value="Servicios">Servicios</option>
            </select>
          </div>
          <div className="text-black mb-4">
            <textarea placeholder="Mensaje" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Enviar</button>
        </form>
      </div>
    </div>
  );
};
