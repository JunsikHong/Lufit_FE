import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Coins, 
  Flame,
  Calendar as CalendarIcon
} from 'lucide-react';
import Button from "@/pages/common/ui/Button";

// 임시 데이터: 실제로는 서버(Spring Boot)에서 받아올 데이터입니다.
const MOCK_RECORDS: any = {
  "2024-05-13": [
    { id: 1, title: "아침 공복 물 한잔", completed: true, points: 10, category: "dietary" },
    { id: 2, title: "15분 스트레칭", completed: true, points: 20, category: "activity" },
    { id: 3, title: "영양제 챙겨먹기", completed: false, points: 10, category: "lifestyle" },
  ],
  "2024-05-14": [
    { id: 4, title: "식후 10분 산책", completed: true, points: 15, category: "activity" },
  ]
};

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState("2024-05-13");
  
  // 캘린더 날짜 생성 로직 (단순화된 예시)
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-6 p-4 ">
      {/* 1. 헤더 섹션 */}
      <header className="flex justify-between items-center py-2">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <CalendarIcon size={22} className="text-blue-600" />
          습관 기록부
        </h1>
        <div className="flex items-center gap-1 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
          <Flame size={16} className="text-orange-500" />
          <span className="text-sm font-bold text-orange-700">12일째</span>
        </div>
      </header>

      {/* 2. 캘린더 카드 섹션 */}
      <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <ChevronLeft size={20} className="text-gray-400" />
          </button>
          <span className="font-bold text-lg text-gray-800">2024년 5월</span>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* 요일 표시 */}
        <div className="grid grid-cols-7 mb-2">
          {['일', '월', '화', '수', '목', '금', '토'].map((day, i) => (
            <div key={day} className={`text-center text-xs font-medium ${i === 0 ? 'text-red-400' : 'text-gray-400'}`}>
              {day}
            </div>
          ))}
        </div>

        {/* 날짜 그리드 */}
        <div className="grid grid-cols-7 gap-y-2">
          {daysInMonth.map((date) => {
            const fullDate = `2024-05-${date.toString().padStart(2, '0')}`;
            const isSelected = selectedDate === fullDate;
            const isToday = date === 13; // 예시용 오늘 날짜

            return (
              <div 
                key={date} 
                onClick={() => setSelectedDate(fullDate)}
                className="flex flex-col items-center py-2 cursor-pointer"
              >
                <div className={`
                  w-10 h-10 flex items-center justify-center rounded-2xl text-sm font-bold transition-all
                  ${isSelected ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-blue-50'}
                  ${isToday && !isSelected ? 'border-2 border-blue-600 text-blue-600' : ''}
                `}>
                  {date}
                </div>
                {/* 루틴 완료 점 표시 */}
                <div className="flex gap-0.5 mt-1">
                  {MOCK_RECORDS[fullDate]?.slice(0, 3).map((_: any, i: number) => (
                    <div key={i} className={`w-1 h-1 rounded-full ${isSelected ? 'bg-white/60' : 'bg-blue-400'}`} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 선택된 날짜의 습관 리스트 섹션 */}
      <section className="flex flex-col gap-3">
        <div className="flex justify-between items-end px-1 mb-1">
          <h3 className="font-bold text-lg text-gray-800">
            {selectedDate.split('-')[2]}일의 기록
          </h3>
          <span className="text-xs text-gray-400 font-medium">총 {MOCK_RECORDS[selectedDate]?.length || 0}개 수행</span>
        </div>

        {MOCK_RECORDS[selectedDate] ? (
          MOCK_RECORDS[selectedDate].map((habit: any) => (
            <div 
              key={habit.id} 
              className="bg-white p-5 rounded-2xl flex items-center justify-between border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-4">
                {habit.completed ? (
                  <CheckCircle2 size={24} className="text-blue-600 shrink-0" />
                ) : (
                  <Circle size={24} className="text-gray-200 shrink-0" />
                )}
                <div>
                  <p className={`font-bold ${habit.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                    {habit.title}
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Coins size={12} className="text-yellow-500" />
                    <span className="text-[11px] font-semibold text-yellow-600">+{habit.points} P 획득</span>
                  </div>
                </div>
              </div>
              
              {!habit.completed && (
                <Button className="h-8 px-4 text-xs font-bold bg-gray-100 text-gray-600">
                  인증하기
                </Button>
              )}
            </div>
          ))
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-gray-300">
            <p className="text-sm">기록이 없는 날입니다.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CalendarPage;