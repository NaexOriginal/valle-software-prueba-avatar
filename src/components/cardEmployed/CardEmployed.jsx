import '../ui/background.css';

export const CardEmployed = () => {
  return (
    <div id="Equipo" className="bg-black-custom flex flex-col items-center min-h-screen justify-center p-5 overflow-hidden">
      <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 mb-12 text-center pb-14 w-full">
        Equipo
      </h2>

      <div className="relative w-full max-w-screen-lg overflow-x-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-transparent to-blue-600 rounded-lg blur-md opacity-30 -z-10"></div>
        <div className="flex space-x-4 pb-4 scroll-smooth">
          {[
            { name: 'David Felipe Vaszquez Pardo', role: 'Junior Software Dev', img: '', logo: '/LogoValleDelSoftware.svg' },
            { name: 'Angel Daniel Diaz Bastidas', role: 'Junior Software Dev', img: '', logo: '/LogoValleDelSoftware.svg' },
            { name: 'Jhon Deivid Ramirez Nuñez', role: 'Junior Software Dev', img: '', logo: '/LogoValleDelSoftware.svg' },
            { name: 'Jonatan Andres Novoa Rodriguez', role: 'Junior Software Dev', img: '', logo: '/LogoValleDelSoftware.svg' },
            { name: 'Daniel Felipe Ortega Gutierrez', role: 'Junior Software Dev', img: '', logo: '/LogoValleDelSoftware.svg' },
            { name: 'Rafael Leonardo Piedrahita Correa', role: 'Junior Software Dev', img: '', logo: '/LogoValleDelSoftware.svg' },
            { name: 'Leonel Lugo Mendoza', role: 'Junior Software Dev', img: '', logo: '/LogoValleDelSoftware.svg' },
            { name: 'Daniel Bastidas', role: 'Junior Software Dev', img: '', logo: '/LogoValleDelSoftware.svg' },
          ].map((employee, index) => (
            <div key={index} className="flex-shrink-0 w-72 bg-slate-900 border border-gray-800 text-white p-6 rounded-lg shadow-lg relative">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <img src={employee.logo} alt="Logo" className="w-15 h-12 transform" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-center mb-2">
                    <span className="p-2 rounded-full bg-violet-600">
                      <img src={employee.img} alt="Foto" className="w-16 h-16 rounded-full" />
                    </span>
                  </div>
                  <p className="text-center italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam nulla optio?
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
