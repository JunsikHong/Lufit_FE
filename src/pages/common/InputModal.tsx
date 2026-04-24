import { useEffect } from "react";

type Props = {
    open: boolean;
    value: number | "";
    onChange: (v: number | "") => void;
    onClose: () => void;
    placeholder?: string;
};

const InputModal = ({
    open,
    value,
    onChange,
    onClose,
    placeholder,
}: Props) => {
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    if (!open) return null;

    const handleInput = (num: number) => {
        const newValue = value === "" ? num : Number(`${value}${num}`);
        onChange(newValue);
    };

    const handleDelete = () => {
        if (value === "") return;
        const str = String(value).slice(0, -1);
        onChange(str === "" ? "" : Number(str));
    };

    return (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
            <div className="flex-1 flex flex-col justify-center items-center px-6">
                <p className="text-gray-400 text-sm mb-2">{placeholder}</p>
                <div className="text-4xl font-semibold text-gray-900">
                    {value || "0"}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <button
                        key={n}
                        onClick={() => handleInput(n)}
                        className="py-5 text-xl font-semibold rounded-xl bg-gray-100"
                    >
                        {n}
                    </button>
                ))}
                <button onClick={handleDelete} className="py-5 text-lg">
                    ⌫
                </button>
                <button
                    onClick={() => handleInput(0)}
                    className="py-5 text-xl font-semibold rounded-xl bg-gray-100"
                >
                    0
                </button>
                <button
                    onClick={onClose}
                    className="py-5 text-green-600 font-semibold"
                >
                    완료
                </button>
            </div>
        </div>
    );
};

export default InputModal;