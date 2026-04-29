import { Check } from "lucide-react";

const InputButton = ({ label, active, onClick }: any) => {
  return (
    <div className="flex-shrink-0">

      <button
        onClick={onClick}
        className={`
        px-4 py-3 rounded-xl border whitespace-nowrap transition
        ${active
            ? "bg-green-500 text-white border-green-500"
            : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"}
      `}
      >
        {active ? (
          <Check  />
        ) : (
          label
        )}
      </button>
    </div>
  );
};

export default InputButton;