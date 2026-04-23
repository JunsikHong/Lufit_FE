import { useNavigate } from 'react-router-dom';

const ButtonSection = () => {
    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => navigate('/routine')}
          className="relative h-44 bg-white border border-gray-200 rounded-2xl p-5 overflow-hidden 
                   hover:scale-[1.03] active:scale-[0.97] transition text-left"
        >
          <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 border-b flex items-center px-4 text-xs font-medium text-gray-500">
            TODAY
          </div>
          <div className="absolute top-12 left-5">
            <div className="font-bold text-lg">건강 루틴</div>
            <div className="text-sm text-gray-500 mt-1">
              운동·식단·습관 관리
            </div>
          </div>
          <div className="absolute bottom-4 right-4 text-4xl font-bold text-red-400">
            22
          </div>
        </button>

        <button
          onClick={() => navigate('/health')}
          className="relative h-44 bg-green-500 text-white rounded-2xl p-5 overflow-hidden 
                   hover:scale-[1.03] active:scale-[0.97] transition text-left"
        >
          <div className="absolute top-5 left-5">
            <div className="font-bold text-lg">AI 건강 추천</div>
            <div className="text-sm text-green-100 mt-1">
              맞춤 건강 분석 받기
            </div>
          </div>
          <div className="absolute bottom-4 right-4 text-5xl opacity-90">
            🌿
          </div>
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
        </button>
      </div>
    );
}

export default ButtonSection;