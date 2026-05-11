import { 
  Trophy, 
  Wallet, 
  Calendar, 
  ChevronRight, 
  ShoppingBag, 
  CheckCircle2, 
  Flame,
  Lightbulb
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
import Button from "@/pages/common/ui/Button";

const IntroPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 p-4 ">
      
      {/* 1. 루틴 점수 & 포인트 섹션 */}
      <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">오늘의 루틴 점수</h2>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-blue-600">85</span>
              <span className="text-gray-400 font-medium">/ 100</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100">
            <Wallet className="text-yellow-500" size={18} />
            <span className="font-bold text-yellow-700">1,250 P</span>
          </div>
        </div>
        {/* 프로그레스 바 */}
        <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
          <div className="bg-blue-600 h-full w-[85%] transition-all duration-500" />
        </div>
        <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
          <Flame size={14} className="text-orange-500" /> 7일 연속 루틴 달성 중! 조금만 더 힘내세요.
        </p>
      </section>

      {/* 2. 오늘 루틴 수행 섹션 */}
      <section>
        <div className="flex justify-between items-center mb-3 px-1">
          <h3 className="font-bold text-lg text-gray-800">오늘의 루틴</h3>
        </div>
        <div className="flex flex-col gap-3">
          {['아침 공복 물 한잔', '15분 스트레칭', '영양제 챙겨먹기'].map((routine, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${idx === 0 ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-400'}`}>
                  <CheckCircle2 size={20} />
                </div>
                <span className={`font-medium ${idx === 0 ? 'text-gray-800' : 'text-gray-400 line-through'}`}>
                  {routine}
                </span>
              </div>
              <Button className="h-8 px-3 text-xs bg-blue-50 text-blue-600 hover:bg-blue-100">
                완료
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 기록 달력 UI 섹션 (미니 버전) */}
      <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <Calendar size={18} className="text-blue-600" />
            습관 기록
          </div>
          <ChevronRight size={18} className="text-gray-400" onClick={() => navigate("/routine/calendar")}/>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {['월', '화', '수', '목', '금', '토', '일'].map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-[10px] text-gray-400">{day}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                ${i < 4 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                {10 + i}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 상점 물품 미리보기 섹션 */}
      <section>
        <div className="flex justify-between items-center mb-3 px-1">
          <div className="flex items-center gap-2 font-bold text-lg text-gray-800">
            <ShoppingBag size={20} className="text-purple-500" />
            Lufit 상점
          </div>
          <span className="text-purple-600 text-sm font-medium">더보기</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {[
            { name: '스타벅스 커피', price: '4,500', img: '☕' },
            { name: '비타민 영양제', price: '12,000', img: '💊' },
            { name: '요가 매트', price: '25,000', img: '🧘' }
          ].map((item, i) => (
            <div key={i} className="min-w-[140px] bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="text-3xl mb-2">{item.img}</div>
              <h4 className="text-sm font-bold text-gray-700 truncate w-full text-center">{item.name}</h4>
              <p className="text-xs text-purple-600 font-semibold mt-1">{item.price} P</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. AI 한마디 (추가 제안) */}
      <section className="bg-blue-50 p-4 rounded-2xl flex gap-3 items-start border border-blue-100">
        <Lightbulb className="text-blue-500 shrink-0" size={20} />
        <div>
          <h4 className="text-sm font-bold text-blue-900">AI 루핏의 조언</h4>
          <p className="text-xs text-blue-700 mt-1 leading-relaxed">
            최근 수면 패턴이 불규칙해졌어요. 오늘 저녁 루틴에 '명상 5분'을 추가하면 50포인트를 더 받을 수 있어요!
          </p>
        </div>
      </section>

    </div>
  );
};

export default IntroPage;