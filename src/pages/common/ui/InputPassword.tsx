import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputPasswordProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  label?: string;
}

const InputPassword = ({
  value,
  onChange,
  placeholder,
  error,
  label,
}: InputPasswordProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      {label && <label className="sr-only">{label}</label>}
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full px-4 py-3 pr-10 rounded-xl border bg-white text-gray-900
            outline-none transition
            ${
              error
                ? "border-red-500"
                : "border-gray-300 focus:border-green-500"
            }
          `}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        >
          {show ? (
            <Eye size={18}></Eye>
          ) : (
            <EyeOff size={18}></EyeOff>
          )}
        </button>
      </div>
      <div className="mt-1 min-h-[12px]">
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default InputPassword;