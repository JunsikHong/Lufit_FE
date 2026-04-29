import { Home, Activity, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavigationSection = () => {
    const navigate = useNavigate();

    return (
        <div className=" flex flex-col gap-3">
            <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-100 transition"
            >
                <Home className="w-6 h-6 text-gray-700" />
                <span className="font-medium">홈</span>
            </button>
            <button 
                onClick={() => navigate('/health')}
                className="flex items-center gap-4 px-4 py-3 rounded-full bg-green-50 text-green-600 transition"
            >
                <Sparkles className="w-6 h-6" />
                <span className="font-medium">AI 건강추천</span>
            </button>
            <button 
                onClick={() => navigate('/routine')}
                className="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-100 transition"
            >
                <Activity className="w-6 h-6 text-gray-700" />
                <span className="font-medium">건강 루틴</span>
            </button>
        </div>
    );
}

export default NavigationSection;