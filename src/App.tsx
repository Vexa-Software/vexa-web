import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeaderMinimal from './components/HeaderMinimal';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos'; // Asegurate que el nombre coincida con el archivo
import { ServiciosVexa } from './pages/ServiciosVexa';
import { Herramientas } from './pages/Herramientas';
import {SobreNosotros} from './pages/SobreNosotros';
import Testimonios from './pages/Testimonios';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <HeaderMinimal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/servicios" element={<ServiciosVexa />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
