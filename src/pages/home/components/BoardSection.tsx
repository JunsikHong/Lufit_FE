import { useNavigate } from 'react-router-dom';

const BoardSection = () => {
  const navigate = useNavigate();

  const boards = [
    { title: '오늘 운동 뭐하셨나요?', date: '04.22' },
    { title: '식단 공유해요', date: '04.21' },
    { title: '헬스장 추천 부탁', date: '04.20' },
    { title: '다이어트 시작!', date: '04.19' },
    { title: '단백질 보충제 질문', date: '04.18' },
  ];

  const notices = [
    { title: '서비스 점검 안내', date: '04.22' },
    { title: '신규 기능 업데이트', date: '04.20' },
    { title: '이벤트 안내', date: '04.18' },
    { title: '약관 변경 안내', date: '04.15' },
    { title: '공지 테스트', date: '04.10' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      
      {/* 게시판 */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-sm">커뮤니티</span>
          <span
            onClick={() => navigate('/board')}
            className="text-xs text-gray-400 cursor-pointer hover:text-black"
          >
            더보기
          </span>
        </div>

        <div className="space-y-2">
          {boards.map((item, i) => (
            <div
              key={i}
              className="flex justify-between text-sm cursor-pointer hover:bg-gray-50 px-1 py-1 rounded"
            >
              <span className="truncate">{item.title}</span>
              <span className="text-gray-400 text-xs">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 공지사항 */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-sm">공지사항</span>
          <span
            onClick={() => navigate('/notice')}
            className="text-xs text-gray-400 cursor-pointer hover:text-black"
          >
            더보기
          </span>
        </div>

        <div className="space-y-2">
          {notices.map((item, i) => (
            <div
              key={i}
              className="flex justify-between text-sm cursor-pointer hover:bg-gray-50 px-1 py-1 rounded"
            >
              <span className="truncate">{item.title}</span>
              <span className="text-gray-400 text-xs">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BoardSection;