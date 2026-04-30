const CtaButton = ({
  bgColor = "bg-black",
  textColor = "text-white",
  onClick,
  label,
  disabled = false,
  className = "",
} : any) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full h-12 rounded-xl font-bold transition mb-4 ${bgColor} ${textColor} ${disabled ? "opacity-50 cursor-not-allowed" : "active:scale-[0.98]"} ${className}`}
    >
      {label}
    </button>
  );
};

export default CtaButton;