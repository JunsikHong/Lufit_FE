interface InputStringProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  label?: string;
}

const InputString = ({
  value,
  onChange,
  placeholder,
  error,
  label,
}: InputStringProps) => {
  return (
    <div className="w-full">
      {label && <label className="sr-only">{label}</label>}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full px-4 py-3 rounded-xl border bg-white text-gray-900
          outline-none transition
          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-green-500"
          }
        `}
      />
      <div className="mt-1 min-h-[12px]">
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default InputString;