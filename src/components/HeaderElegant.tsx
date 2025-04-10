// src/components/HeaderElegant.tsx

const HeaderElegant = () => {
    return (
      <header className="bg-black text-white w-full fixed top-0 left-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-bold text-green-500 tracking-wider">
            VEXA
          </a>
  
          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicios" className="hover:text-green-400 transition">Servicios</a>
            <a href="#herramientas" className="hover:text-green-400 transition">Herramientas</a>
            <a href="#proyectos" className="hover:text-green-400 transition">Proyectos</a>
            <a href="#testimonios" className="hover:text-green-400 transition">Testimonios</a>
            <a href="#sobre" className="hover:text-green-400 transition">Sobre</a>
            <a
              href="#contacto"
              className="ml-4 bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition"
            >
              Contacto
            </a>
          </nav>
  
          {/* Mobile icon (placeholder) */}
          <div className="md:hidden">
            {/* Acá podés agregar un menú hamburguesa */}
            <span className="text-green-500 font-bold">☰</span>
          </div>
        </div>
      </header>
    );
  };
  
  export default HeaderElegant;
  