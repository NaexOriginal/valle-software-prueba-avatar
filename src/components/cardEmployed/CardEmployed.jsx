
export const CardEmployed = () => {
  return (
    <div id="Equipo" className="flex flex-col p-5 items-center min-h-screen">
        <h2 className="text-center text-6xl pb-14">Equipo</h2>
      
      <div className="max-w-xs bg-slate-900 text-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          
          <img src="/LogoValleDelSoftware.svg" alt="Logo" className="w-15 h-12 transform" />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-center mb-2">
            <span className="p-2 rounded-full bg-violet-600">
              <img src="" alt="Foto" className="w-16 h-16 rounded-full" />
            </span>
          </div>
          <p className="text-center italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam nulla optio?</p>
          <div className="mt-4 text-center">
            <p className="font-bold">Daniel Bastidas</p>
            <p className="text-sm">Junior Software Dev</p>
          </div>
        </div>
      </div>
    </div>
  )
}
