import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Monitor, Smartphone } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "../config/motion.config";
import FancyButton from "../components/buttons/FancyButton";
import CustomButton17 from "../components/buttons/CustomButton17";

interface ProjectProps {
  title: string;
  description: string;
  year: number;
  client: string;
  industry: string;
  website: string;
  technologies: string[];
  features: string[];
  results: string[];
  mockups: {
    desktop: string[];
    mobile: string[];
  };
  reverse?: boolean;
  slideDirection?: "left" | "right";
}

export const ProjectCard = ({
  title,
  description,
  year,
  client,
  industry,
  website,
  technologies,
  features,
  results,
  mockups,
  reverse = false,
  slideDirection = "left",
}: ProjectProps) => {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [index, setIndex] = useState(0);
  const currentSlides = mockups[device];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + currentSlides.length) % currentSlides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % currentSlides.length);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full max-w-7xl mx-auto py-12"
    >
      {/* Título + selector de dispositivo */}
      <div className="flex flex-col md:flex-row items-start justify-between mb-6">
        <div className="flex-1 mb-4 md:mb-0">
          <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 text-sm mt-1 max-w-xl">{description}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setDevice("desktop")}
            className={`text-sm px-3 py-1 rounded-md border ${device === "desktop"
              ? "bg-emerald-500 text-black"
              : "text-white border-white/20"
              }`}
          >
            <Monitor className="inline-block w-4 h-4 mr-1" /> Desktop
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={`text-sm px-3 py-1 rounded-md border ${device === "mobile"
              ? "bg-emerald-500 text-black"
              : "text-white border-white/20"
              }`}
          >
            <Smartphone className="inline-block w-4 h-4 mr-1" /> Mobile
          </button>
        </div>
      </div>

      {/* Contenido info + mockup alineado */}
      <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse sm:items-center  lg:items-center sm:flex-row-reverse lg:justify-between" : "sm:flex-row sm:items-center lg:flex-row lg:items-center"} gap-12 items-end lg:justify-between`}>
        {/* Info */}
        <div className="flex-1 order-2 sm:order-1">
          <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
            <div>
              <span className="text-white font-semibold">Año</span>
              <p className="text-emerald-400">{year}</p>
            </div>
            <div>
              <span className="text-white font-semibold">Cliente</span>
              <p className="text-emerald-400">{client}</p>
            </div>
            <div>
              <span className="text-white font-semibold">Industria</span>
              <p className="text-emerald-400">{industry}</p>
            </div>
            <div>
              <span className="text-white font-semibold">Website</span><br />
              <a href={website} className="text-emerald-400 underline" target="_blank" rel="noopener noreferrer">Visitar sitio</a>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-white font-semibold mb-2">Tecnologías</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span key={i} className="text-xs bg-white/10 text-white px-2 py-1 rounded-md">{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-white font-semibold mb-2 mt-4">Características</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm text-white font-semibold mb-2 mt-4">Resultados</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1 mb-8">
              {results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
          <CustomButton17
            text="Visitar sitio"
            href= {website}
            bgColor="#262626"
            textColor="#10b981"
            borderColor="none"
            hoverBgColor="#10b981"
            hoverTextColor="text-black"
            hoverBorderColor="#10b981"
            padding="0.4rem 2rem"
          />


        </div>

        {/* Mockup */}
        <motion.div
          className="flex-1 max-w-lg order-1 sm:order-2"
          variants={slideDirection === "left" ? slideInLeft : slideInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative rounded-xl bg-black border border-white/10 overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={currentSlides[index]}
              alt={`${title} ${device} ${index}`}
              className="w-full object-contain h-[280px] bg-white"
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button onClick={handlePrev} className="p-2 text-white/70 hover:text-white">←</button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button onClick={handleNext} className="p-2 text-white/70 hover:text-white">→</button>
            </div>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {currentSlides.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${index === i ? "bg-emerald-500" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div >
  );
};
