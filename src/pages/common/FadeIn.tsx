const FadeIn = ({ show, children }: any) => {
  return (
    <div
      className={`
        transition-all duration-500 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"}
      `}
    >
      {show && children}
    </div>
  );
};

export default FadeIn;