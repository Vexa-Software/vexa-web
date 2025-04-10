import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaCogs,
  FaRobot,
  FaNetworkWired,
  FaRocket,
} from "react-icons/fa";
import { fadeInUp, staggerContainer, titleVariant, subtitleVariant} from "../config/motion.config";

const servicios = [
  {
    title: "Desarrollo Web Avanzado",
    description: "Creamos sitios y aplicaciones web de alto rendimiento utilizando las tecnologías más modernas y eficientes.",
    icon: <FaCode size={28} />,
  },
  {
    title: "Aplicaciones Móviles",
    description: "Desarrollamos apps nativas y multiplataforma que ofrecen experiencias excepcionales en todos los dispositivos.",
    icon: <FaMobileAlt size={28} />,
  },
  {
    title: "Optimización de Procesos",
    description: "Automatizamos flujos de trabajo y procesos para maximizar la eficiencia y reducir costos operativos.",
    icon: <FaCogs size={28} />,
  },
  {
    title: "Soluciones con IA",
    description: "Integramos tecnologías de inteligencia artificial para potenciar productos y servicios con capacidades avanzadas.",
    icon: <FaRobot size={28} />,
  },
  {
    title: "Plataformas Escalables",
    description: "Diseñamos arquitecturas robustas que crecen con tu negocio, desde startups hasta empresas globales.",
    icon: <FaNetworkWired size={28} />,
  },
  {
    title: "Desarrollo Acelerado",
    description: "Utilizamos herramientas de última generación y metodologías ágiles para entregar productos de calidad en tiempo récord.",
    icon: <FaRocket size={28} />,
  },
];

export function ServiciosVexa() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="servicios" className="bg-black text-white py-24 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Servicios de <span className="text-emerald-400">VEXA</span>
        </motion.h2>
        <motion.p
          variants={subtitleVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Transformamos ideas en soluciones digitales con tecnología de vanguardia y diseño funcional.
        </motion.p>
      </div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden rounded-xl border border-emerald-900/30 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            variants={fadeInUp}
          >
            <div className="mb-4 text-emerald-400">{servicio.icon}</div>
            <h3 className="mb-2 text-xl font-bold text-white">{servicio.title}</h3>
            <p className="text-gray-300">{servicio.description}</p>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
