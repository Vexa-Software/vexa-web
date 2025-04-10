import { motion } from "framer-motion";
import { projects } from "../components/projects";
import { ProjectCard } from "../components/ProjectCard";
import {
  titleVariant,
  subtitleVariant,
  staggerContainer,

} from "../config/motion.config";

export default function Proyectos() {
  return (
    <motion.section
      id="proyectos"
      className="bg-black text-white py-24 px-6 sm:px-10 lg:px-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto  text-center mb-12">
        <motion.h2
          variants={titleVariant}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Todos los <span className="text-emerald-400">Proyectos</span>
        </motion.h2>

        <motion.p
          variants={subtitleVariant}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Conocé en detalle cómo cada proyecto resolvió un desafío digital real combinando tecnología, diseño y estrategia.
        </motion.p>
      </div>

      <motion.div
  className="space-y-24"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {projects.map((project, idx) => (
    <ProjectCard
      key={idx}
      {...project}
      reverse={idx % 2 !== 0}
      slideDirection={idx % 2 === 0 ? "left" : "right"}
    />
  ))}
</motion.div>

    </motion.section>
  );
}
