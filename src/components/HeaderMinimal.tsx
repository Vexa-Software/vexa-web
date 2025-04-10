import { Link } from 'react-router-dom';

const HeaderMinimal = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-zinc-900 bg-opacity-90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo simple */}
        <Link to="/" className="text-xl font-semibold text-green-400 tracking-wide">
          VEXA
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link to="/servicios" className="hover:text-green-300">Servicios</Link>
          <Link to="/herramientas" className="hover:text-green-300">Herramientas</Link>
          <Link to="/proyectos" className="hover:text-green-300">Proyectos</Link>
          <Link to="/testimonios" className="hover:text-green-300">Testimonios</Link>
          <Link to="/sobre-nosotros" className="hover:text-green-300">Sobre</Link>
        </nav>

        {/* Botón contacto destacado */}
        <Link
          to="/contacto"
          className="hidden md:inline-block px-4 py-1.5 text-sm bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition"
        >
          Contacto
        </Link>
      </div>
    </header>
  );
};

export default HeaderMinimal;

  