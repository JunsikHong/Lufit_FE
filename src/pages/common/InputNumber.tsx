import { useState } from "react";
import NumberInputModal from "@/pages/common/InputModal";

interface InputNumberProps {
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  error?: string;
  label?: string;
  useModal?: boolean;
}

const InputNumber = ({
  value,
  onChange,
  placeholder,
  error,
  label,
  useModal = false,
}: InputNumberProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">

      {label && <label className="sr-only">{label}</label>}

      {/* 🔥 useModal일 때 */}
      {useModal ? (
        <>
          <div
            onClick={() => setOpen(true)}
            className={`
              w-full px-4 py-3 rounded-xl border bg-white text-gray-900
              ${error ? "border-red-500" : "border-gray-300"}
            `}
          >
            {value || (
              <span className="text-gray-400">{placeholder}</span>
            )}
          </div>

          <NumberInputModal
            open={open}
            value={value}
            onChange={onChange}
            onClose={() => setOpen(false)}
            placeholder={placeholder}
          />
        </>
      ) : (
        /* 🔥 일반 input */
        <input
          type="number"
          value={value}
          placeholder={placeholder}
          onChange={(e) =>
            onChange(e.target.value === "" ? "" : Number(e.target.value))
          }
          className={`
            w-full px-4 py-3 rounded-xl border bg-white text-gray-900
            outline-none transition
            ${error
              ? "border-red-500"
              : "border-gray-300 focus:border-green-500"}
          `}
        />
      )}

      {/* 에러 */}
      <div className="mt-1 min-h-[18px]">
        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}
      </div>

    </div>
  );
};

export default InputNumber;