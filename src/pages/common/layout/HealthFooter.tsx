interface HealthFooterProps {
  step: string;
  onChangeStep: (step: string) => void;
}

const steps = [
  { key: "body", label: "신체" },
  { key: "lifestyle", label: "생활" },
  { key: "dietary", label: "식단" },
  { key: "activity", label: "활동" },
  { key: "sleep", label: "수면" },
  { key: "result", label: "결과" },
];

const HealthFooter = ({ step, onChangeStep }: HealthFooterProps) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50">
      <div className="flex justify-between px-2 py-2">
        {steps.map((item) => {
          const isActive = step === item.key;

          return (
            <button
              key={item.key}
              onClick={() => onChangeStep(item.key)}
              className="flex-1 flex flex-col items-center py-1"
            >
              <div
                className={`text-xs font-medium ${
                  isActive ? "text-green-500" : "text-gray-400"
                }`}
              >
                {item.label}
              </div>

              {/* active indicator */}
              <div
                className={`mt-1 h-1 w-6 rounded-full transition ${
                  isActive ? "bg-green-500" : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HealthFooter;