import { 
  User, 
  Activity, 
  Utensils, 
  Dumbbell, 
  Moon, 
  CheckCircle2 
} from 'lucide-react'; // 
import Button from "../ui/Button";

// 각 스텝에 대한 설정 데이터 (아이콘 추가)
const STEPS = [
  { id: 'body', label: '신체', icon: User },
  { id: 'lifestyle', label: '생활', icon: Activity },
  { id: 'dietary', label: '식단', icon: Utensils },
  { id: 'activity', label: '활동', icon: Dumbbell },
  { id: 'sleep', label: '수면', icon: Moon },
  { id: 'result', label: '결과', icon: CheckCircle2 },
];

interface HealthFooterProps {
  step: string;
  onChangeStep: (step: string) => void;
}

const HealthFooter = ({ step, onChangeStep }: HealthFooterProps) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-l border-r border-gray-200 z-50 max-w-[750px] mx-auto px-2">
      <div className="flex justify-between items-center h-20 gap-1">
        {STEPS.map((item) => {
          const isActive = step === item.id;
          const Icon = item.icon;
          
          return (
            <Button
              key={item.id}
              onClick={() => onChangeStep(item.id)}
              className={`
                flex-1 flex-col gap-1 h-14 min-w-[50px] transition-all duration-300
                ${isActive 
                  ? 'bg-green-500 text-white shadow-sm hover:bg-green-600' 
                  : 'bg-transparent text-gray-400'
                }
              `}
            >
              <Icon size={isActive ? 20 : 18} />
              <span className={`text-[10px] font-semibold leading-none`}>
                {item.label}
              </span>
            </Button>
          );
        })}
      </div>
    </footer>
  );
};

export default HealthFooter;