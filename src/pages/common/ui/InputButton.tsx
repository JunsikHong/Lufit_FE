const InputButton = ({ label, active, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 py-3 rounded-full transition
        ${active
          ? "bg-green-500 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"}
      `}
    >
      {label}
    </button>
  );
};

export default InputButton;