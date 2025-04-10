import { projects } from "../components/projects";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectShowcase() {
  const destacados = projects.filter(p => p.destacado).slice(0, 3);

  return (
    <section id="proyectos" className="py-24">
      <div className="max-w-7xl  text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Proyectos <span className="text-emerald-400">Destacados</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Descubrí cómo nuestras soluciones han transformado negocios.
        </p>
      </div>

      <div className="space-y-20">
        {destacados.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
