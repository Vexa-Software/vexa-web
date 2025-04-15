interface FancyButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  bg?: String;
  hoverBg?: string; // ej: 'bg-emerald-400'
  textColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
}

const FancyButton = ({
  href,
  children,
  className = "",
  bg = "",
  hoverBg = "bg-emerald-400",
  textColor = "text-white",
  hoverTextColor = "text-black",
  borderColor = "border-white",
}: FancyButtonProps) => {
  return (
    <a
      href={href}
      className={`relative inline-block px-6 py-3 font-semibold  rounded-md overflow-hidden group transition-all duration-300 border ${textColor} ${borderColor} ${className}`}
    >
      {/* Overlay de fondo que se desliza */}
      <span
        className={`absolute inset-0 ${bg} ${hoverBg} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0`}
        aria-hidden="true"
      />
      {/* Contenido encima del overlay */}
      <span className={`relative z-10 transition-all duration-300 group-hover:${hoverTextColor}`}>
        {children}
      </span>
    </a>
  );
};

export default FancyButton;
