import { Check } from "lucide-react";

interface InputCheckProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const InputCheck = ({ checked, onChange, label }: InputCheckProps) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`
            w-6 h-6 rounded-md border-2 flex items-center justify-center transition
            ${checked
              ? "bg-black border-black"
              : "bg-white border-gray-300 hover:border-gray-400"}
          `}
        >
          {checked && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
        </div>
      </div>
      {label && <span className="text-gray-700">{label}</span>}
    </label>
  );
};

export default InputCheck;