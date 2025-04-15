// src/components/Hero.tsx
import { motion } from "framer-motion";
import {
  titleVariant,
  subtitleVariant,
  fadeInUp,
  staggerContainer,
} from "../config/motion.config";
import CustomButton17 from "../components/buttons/CustomButton17";

import { ServiciosVexa } from "./ServiciosVexa";
import { Herramientas } from "./Herramientas";
import Proyectos from "./Proyectos";
import { SobreNosotros } from "./SobreNosotros";

const Home = () => {
  return (
    <>
      <section className="w-full h-screen overflow-hidden relative" id="home">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/vexalogo.webm"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay negro */}
        <div className="absolute inset-0 bg-black/65 z-10" />

        {/* Contenido centrado */}
        <div className="relative z-20 flex items-center justify-center h-full px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="backdrop-blur-xs bg-black/20 rounded-xl py-28 px-10 max-w-3xl text-center"
          >
            <motion.h1
              variants={titleVariant}
              className="text-4xl md:text-6xl font-bold text-white mb-14"
            >
              VE<span className="text-emerald-400">X</span>A
            </motion.h1>

            <motion.p
              variants={subtitleVariant}
              className="text-white mt-4 text-lg md:text-xl"
            >
              Transformamos ideas en productos digitales excepcionales,
              combinando experiencia técnica con herramientas avanzadas para un
              desarrollo más rápido y eficiente.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CustomButton17
                text="Nuestros servicios"
                bgColor="transparent"
                textColor="#10b981"
                borderColor="#10b981"
                hoverBgColor="#10b981"
                hoverTextColor="text-black"
                hoverBorderColor="#10b981"
              />


              <CustomButton17
                text="Ver Proyectos"
                bgColor="#262626"
                textColor="#10b981"
                borderColor="none"
                hoverBgColor="#10b981"
                hoverTextColor="text-black"
                hoverBorderColor="none"
              />
              



            </motion.div>
          </motion.div>
        </div>
      </section>

      <ServiciosVexa />
      <Herramientas />
      <Proyectos />
      <SobreNosotros />
    </>
  );
};

export default Home;
