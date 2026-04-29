import { Check } from "lucide-react";

interface Option {
    label: string;
    value: string;
}

interface InputRadioProps {
    options: Option[];
    error?: string;
    value: string | "";
    onChange: (value: string) => void;
}

const InputRadio = ({ options, error, value, onChange }: InputRadioProps) => {
    const isTwo = options.length === 2;

    // ✅ 2개일 때 (segmented control 스타일)
    if (isTwo) {
        return (
            <div className="w-full">
                <div className="flex w-full border border-gray-300 rounded-xl overflow-hidden">
                    {options.map((opt, idx) => {
                        const active = value === opt.value;

                        return (
                            <label
                                key={opt.value}
                                className={`
                flex-1 text-center py-3 cursor-pointer transition
                ${idx !== 0 ? "border-l border-gray-300" : ""}
                ${active ? "bg-black text-white" : "bg-white text-gray-700"}
              `}
                            >
                                <input
                                    type="radio"
                                    name="radio"
                                    value={opt.value}
                                    checked={active}
                                    onChange={() => onChange(opt.value)}
                                    className="sr-only"
                                />
                                {opt.label}
                            </label>
                        );
                    })}
                </div>
                <div className="mt-1 min-h-[12px]">
                    {error && <p className="text-xs text-red-500">{error}</p>}
                </div>
            </div>
        );
    }

    // ✅ 여러개일 때 (checkbox 스타일 UI)
    return (
        <div className="w-full">
            <div className="flex flex-col gap-2">
                {options.map((opt) => {
                    const checked = value === opt.value;

                    return (
                        <label
                            key={opt.value}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <div className="relative">
                                <input
                                    type="radio"
                                    name="radio"
                                    checked={checked}
                                    onChange={() => onChange(opt.value)}
                                    className="sr-only"
                                />
                                <div
                                    className={`
                  w-6 h-6 rounded-md border-2 flex items-center justify-center transition
                  ${checked
                                            ? "bg-black border-black"
                                            : "bg-white border-gray-300 hover:border-gray-400"
                                        }
                `}
                                >
                                    {checked && (
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    )}
                                </div>
                            </div>
                            <span className="text-gray-700">{opt.label}</span>
                        </label>
                    );
                })}
            </div>
            <div className="mt-1 min-h-[12px]">
                {error && <p className="text-xs text-red-500">{error}</p>}
            </div>
        </div>

    );
};

export default InputRadio;