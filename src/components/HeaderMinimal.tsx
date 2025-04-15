import { Link } from 'react-router-dom';
import CustomButton17 from "../components/buttons/CustomButton17";
const HeaderMinimal = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-zinc-900 bg-opacity-90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo simple */}
        <Link to="/" className="text-xl font-semibold text-emerald-400 tracking-wide px-10">
          VEXA
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link to="/servicios" className="hover:text-emerald-400">Servicios</Link>
          <Link to="/herramientas" className="hover:text-emerald-400">Herramientas</Link>
          <Link to="/proyectos" className="hover:text-emerald-400">Proyectos</Link>
          <Link to="/testimonios" className="hover:text-emerald-400">Testimonios</Link>
          <Link to="/sobre-nosotros" className="hover:text-emerald-400">Sobre</Link>
        </nav>

        {/* Botón contacto destacado */}
        <Link
          to="/contacto"
          
        >
          <CustomButton17
                text="Contacto"
                bgColor="#262626"
                textColor="#10b981"
                borderColor="none"
                hoverBgColor="#10b981"
                hoverTextColor="text-black"
                hoverBorderColor="none"
                padding="0.4rem 2rem"
              />
        </Link>
      </div>
    </header>
  );
};

export default HeaderMinimal;

  