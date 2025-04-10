// src/components/ToolCard.tsx
import { ArrowRight } from "lucide-react";

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
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <ul className="text-sm text-emerald-300 space-y-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-emerald-400">↳</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={href}
        className="mt-6 w-36 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:text-emerald-400 transition hover:bg-white/10"
      >
        {buttonText} <ArrowRight className="w-4 h-4" />
      </a>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full" />
    </div>
  );
};
