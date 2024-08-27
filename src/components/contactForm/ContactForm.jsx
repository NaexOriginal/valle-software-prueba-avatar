export const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 p-4">
      {/* Contenedor para el borde iluminado */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 rounded-lg blur-md transition-all duration-500"></div>
        <div id="Contactanos" className="relative bg-gray-900 border border-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
          <h2 className="text-white text-center text-4xl md:text-5xl mb-6 font-extrabold">Contáctanos</h2>
          <p className="text-white text-center text-lg md:text-xl mb-8">Contacta con nosotros para ver en qué podemos colaborarte</p>
          <form action="submit">
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <input 
                  type="text" 
                  placeholder="Primer Nombre" 
                  className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                />
                <input 
                  type="text" 
                  placeholder="Segundo Nombre" 
                  className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                />
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                <input 
                  type="email" 
                  placeholder="Correo Electrónico" 
                  className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                />
                <input 
                  type="number" 
                  placeholder="Teléfono" 
                  className="flex-1 p-3 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div className="mb-4">
              <select className="w-full p-3 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400">
                <option value="">--Por favor, seleccione una opción--</option>
                <option value="Servicios">Servicios</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea 
                placeholder="Mensaje" 
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
            <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
