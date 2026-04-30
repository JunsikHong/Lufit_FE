const ToggleButton = ({
  isOn,
  onClick,
  bgColor,
  disabled = false,
}: any) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`
        w-14 h-8 flex items-center rounded-full p-1 transition-all duration-200
        ${bgColor ? bgColor : isOn ? "bg-blue-500" : "bg-gray-300"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      <div
        className={`
          w-6 h-6 bg-white rounded-full shadow-md transition-all duration-200
          ${isOn ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </div>
  );
};

export default ToggleButton;