import { useEffect, useRef, useState } from 'react';
import '../ui/background.css';

export const CardEmployed = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollAmount = scrollPosition;
    let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

    const autoScroll = () => {
      if (!isPaused) {
        scrollAmount += 2; // Ajusta la velocidad del scroll aquí
        if (scrollAmount >= maxScrollLeft) {
          scrollAmount = 0; // Reinicia el scroll
        }
        scrollElement.scrollLeft = scrollAmount;
      } else {
        setScrollPosition(scrollElement.scrollLeft);
      }
    };

    const scrollInterval = setInterval(autoScroll, 20); // Ajusta la velocidad del intervalo aquí

    return () => clearInterval(scrollInterval); // Limpia el intervalo cuando el componente se desmonta
  }, [isPaused, scrollPosition]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div id="Equipo" className="bg-black-custom flex flex-col items-center min-h-screen justify-center p-5 overflow-hidden">
      <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-12 text-center pb-14 w-full">
        Equipo
      </h2>

      <div ref={scrollRef} className="relative w-full max-w-screen-lg overflow-x-hidden hide-scrollbar">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-transparent to-blue-600 rounded-lg blur-md opacity-30 -z-10"></div>
        <div className="flex space-x-6 pb-6 scroll-smooth">
          {[
            { name: 'Leonel Lugo Medonza', role: 'Direccion', img: '/src/fotos/Leonel.jpeg', logo: '/LogoValleDelSoftware.svg', message: 'Apasionado por el desarrollo web y la inteligencia artificial.' },
            { name: 'Daniel Felipe Ortega', role: 'Lider', img: '/src/fotos/Daniel.jpeg', logo: '/LogoValleDelSoftware.svg', message: 'Apasionado por el desarrollo web y la inteligencia artificial.' },
            { name: 'Nicolas Valentin Ordoñez Sarmiento', role: 'Lider', img: '/src/fotos/Nicolas.jpg', logo: '/LogoValleDelSoftware.svg', message: 'Amante de la programación y las soluciones innovadoras.' },
            { name: 'David Felipe Vazques Pardo', role: 'Desarrollador FullStack', img: '/src/fotos/David.jpeg', logo: '/LogoValleDelSoftware.svg', message: 'Siempre dispuesto a aprender y enfrentar nuevos desafíos.' },
            { name: 'Miguel Angel Vanegas', role: 'Desarrollador FullStack', img: '/src/fotos/.jpeg', logo: '/LogoValleDelSoftware.svg', message: 'Comprometido con el desarrollo de software de calidad.' },
            { name: 'Adrian David Bravo Montoya', role: 'Desarrollador Backend', img: '/src/fotos/Adrian.jpeg', logo: '/LogoValleDelSoftware.svg', message: 'Enfocado en la mejora continua y la eficiencia en proyectos.' },
            { name: 'David Alejandro Ballestero Padilla', role: 'Desarrollador Backend', img: '/src/fotos/David V.jpeg', logo: '/LogoValleDelSoftware.svg', message: 'Explorador de nuevas tecnologías y metodologías ágiles.' },
            { name: 'Carol Nicol Clavijo Bonilla', rol: 'Desarrollador Frontend', img: '/src/fotos/Nicol.jpeg', logo: '/LogoValleDelSoftware.svg', message: 'Comprometido con el desarrollo de software de calidad.'}
          ].map((employee, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-96 bg-slate-900 border border-gray-800 text-white p-10 rounded-lg shadow-lg relative cursor-pointer transition-transform duration-300 ${
                selectedCard === index ? 'transform scale-105 border-blue-500' : ''
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(index)}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <img src={employee.logo} alt="Logo" className="w-16 h-14 transform" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-center mb-4">
                    <span className="p-2 bg-gradient-to-r from-blue-500 to-blue-800">
                      <img src={employee.img} alt="Foto" className="w-32 h-32 rounded-lg" />
                    </span>
                  </div>
                  <p className="text-center italic">
                    {employee.message}
                  </p>
                  <div className="mt-4 text-center">
                    <p className="font-bold">{employee.name}</p>
                    <p className="text-sm">{employee.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
