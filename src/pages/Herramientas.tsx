import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  titleVariant,
  subtitleVariant,
  staggerContainer,
  fadeInUp,
} from "../config/motion.config";
import { ToolCard } from "../components/ToolCard";
import { FaWrench, FaCubes } from "react-icons/fa";

const tools = [
  {
    title: "VEXA Code Accelerator",
    description:
      "Herramientas de desarrollo que aumentan la productividad y calidad del código, combinando las mejores prácticas con asistencia inteligente.",
    features: [
      "Generación de código basada en patrones",
      "Detección y corrección de errores",
      "Sugerencias de refactorización",
      "Documentación automática",
    ],
    icon: <FaWrench size={24} />,
    href: "#",
  },
  {
    title: "VEXA DevOps Suite",
    description:
      "Plataforma para automatizar y optimizar el ciclo de vida del desarrollo, desde el código hasta la implementación.",
    features: [
      "Integración y despliegue continuos",
      "Gestión inteligente de dependencias",
      "Configuración automatizada de entornos",
      "Monitoreo y optimización de rendimiento",
    ],
    icon: <FaCubes size={24} />,
    href: "#",
  },
  {
    title: "VEXA Code Accelerator",
    description:
      "Herramientas de desarrollo que aumentan la productividad y calidad del código, combinando las mejores prácticas con asistencia inteligente.",
    features: [
      "Generación de código basada en patrones",
      "Detección y corrección de errores",
      "Sugerencias de refactorización",
      "Documentación automática",
    ],
    icon: <FaWrench size={24} />,
    href: "#",
  },
  {
    title: "VEXA DevOps Suite",
    description:
      "Plataforma para automatizar y optimizar el ciclo de vida del desarrollo, desde el código hasta la implementación.",
    features: [
      "Integración y despliegue continuos",
      "Gestión inteligente de dependencias",
      "Configuración automatizada de entornos",
      "Monitoreo y optimización de rendimiento",
    ],
    icon: <FaCubes size={24} />,
    href: "#",
  },
];

export const Herramientas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="herramientas"
      className="min-h-screen bg-black text-white py-24 px-6 sm:px-10 lg:px-24"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Herramientas de <span className="text-emerald-400">Desarrollo</span>
        </motion.h2>

        <motion.p
          variants={subtitleVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Utilizamos tecnologías eficientes y modernas para optimizar nuestros flujos de trabajo y acelerar la entrega de valor.
        </motion.p>
      </div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {tools.map((tool, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <ToolCard {...tool} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
