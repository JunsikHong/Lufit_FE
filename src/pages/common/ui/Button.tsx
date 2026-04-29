const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        px-4 py-2.5
        rounded-full
        bg-gray-100/60
        hover:bg-gray-200/70
        transition
        flex items-center justify-center
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;