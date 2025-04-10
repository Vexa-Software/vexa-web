// src/pages/SobreNosotros.tsx
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  titleVariant,
  subtitleVariant,
  staggerContainer,
  slideInRight,
} from "../config/motion.config";

export const SobreNosotros = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [counts, setCounts] = useState({
    proyectos: 0,
    industrias: 0,
    desarrolladores: 0,
    reduccion: 0,
  });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCounts((prev) => ({
          proyectos: Math.min(prev.proyectos + 5, 100),
          industrias: Math.min(prev.industrias + 1, 20),
          desarrolladores: Math.min(prev.desarrolladores + 50, 1000),
          reduccion: Math.min(prev.reduccion + 2, 40),
        }));
      }, 80);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <motion.section
      id="sobre"
      ref={ref}
      className="bg-black text-white py-24 px-6 sm:px-10 lg:px-24"
      variants={fadeIn}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Imagen */}
        <motion.div
  variants={slideInRight}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
          <img src="/public/images/prueba.jpg" alt="Sobre VEXA" className="w-full max-w-md mx-auto lg:mx-0" />
        </motion.div>

        {/* Texto + métricas */}
        <motion.div variants={fadeInUp} className="space-y-6">
          <motion.h2 variants={titleVariant} className="text-4xl md:text-5xl font-bold">
            Sobre <span className="text-emerald-400">VEXA</span>
          </motion.h2>

          <motion.p variants={subtitleVariant} className="text-gray-400 text-sm sm:text-base">
            Fundada por un equipo de expertos en desarrollo de software y tecnologías emergentes, VEXA tiene la misión de transformar la forma en que se construyen productos digitales, combinando experiencia técnica con metodologías innovadoras.
          </motion.p>

          <motion.p variants={subtitleVariant} className="text-gray-400 text-sm sm:text-base">
            Nuestra plataforma de desarrollo integra las mejores prácticas de ingeniería con herramientas avanzadas para crear soluciones que hacen que los equipos sean más productivos, creativos y eficientes en la entrega de productos excepcionales.
          </motion.p>

          {/* Contadores */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6"
          >
            <div className="border border-white/10 p-4 rounded-lg text-center">
              <p className="text-emerald-400 text-2xl font-bold">{counts.proyectos}+</p>
              <p className="text-sm text-white/80">Proyectos Completados</p>
            </div>
            <div className="border border-white/10 p-4 rounded-lg text-center">
              <p className="text-emerald-400 text-2xl font-bold">{counts.industrias}+</p>
              <p className="text-sm text-white/80">Industrias Atendidas</p>
            </div>
            <div className="border border-white/10 p-4 rounded-lg text-center">
              <p className="text-emerald-400 text-2xl font-bold">{counts.desarrolladores.toLocaleString()}+</p>
              <p className="text-sm text-white/80">Desarrolladores</p>
            </div>
            <div className="border border-white/10 p-4 rounded-lg text-center">
              <p className="text-emerald-400 text-2xl font-bold">{counts.reduccion}%</p>
              <p className="text-sm text-white/80">Reducción en Tiempo de Desarrollo</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
