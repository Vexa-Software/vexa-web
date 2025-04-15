// src/components/ToolCard.tsx
import { ArrowRight } from "lucide-react";
import CustomButton17 from "../components/buttons/CustomButton17";

interface ToolCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText?: string;
  href?: string;
  icon?: React.ReactNode;
}

export const ToolCard = ({
  title,
  description,
  features,
  buttonText = "Conocer Más",
  href = "#",
  icon,
}: ToolCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] h-auto sm:h-[380px] xl:h-[350px] flex flex-col justify-between">
      <div>
        {icon && <div className="text-emerald-400 mb-4">{icon}</div>}
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <ul className="text-sm text-emerald-300 space-y-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-emerald-400">↳</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>


      <CustomButton17
        text="Conocer mas"
        href={href}
        bgColor="#262626"
        textColor="#10b981"
        borderColor="none"
        hoverBgColor="#10b981"
        hoverTextColor="text-black"
        hoverBorderColor="#10b981"
        padding="0.4rem 2rem"
      />

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full" />
    </div>
  );
};
