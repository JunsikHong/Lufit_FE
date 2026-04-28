import { useState } from "react";
import { Search, Plus, MessageCircle, Heart } from "lucide-react";

const dummyPosts = [
  {
    id: 1,
    title: "운동 루틴 공유합니다",
    content: "하루 30분 홈트로 충분합니다...",
    author: "junsik",
    likes: 12,
    comments: 4,
    createdAt: "2026-04-28",
    category: "운동",
  },
  {
    id: 2,
    title: "다이어트 식단 질문",
    content: "이렇게 먹어도 될까요?",
    author: "user123",
    likes: 8,
    comments: 10,
    createdAt: "2026-04-27",
    category: "식단",
  },
  {
    id: 3,
    title: "러닝 초보 팁",
    content: "처음 시작하는 분들 꼭 보세요",
    author: "runner",
    likes: 25,
    comments: 7,
    createdAt: "2026-04-26",
    category: "러닝",
  },
];

const CommunityListPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("전체");

  const filteredPosts = dummyPosts.filter((post) => {
    const matchCategory = category === "전체" || post.category === category;
    const matchSearch = post.title.includes(search);
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <div className="flex gap-2 p-3 overflow-x-auto bg-white border-b">
        {["전체", "운동", "식단", "러닝"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap border ${category === item
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white border p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {post.category}
              </span>
              <button className="text-gray-500">
                ⋯
              </button>
            </div>
            <h2 className="font-semibold text-base mb-1">
              {post.title}
            </h2>
            <div className="flex justify-between gap-3 mb-3">
              <p className="text-sm text-gray-500 line-clamp-2 flex-1">
                {post.content}
              </p>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <div className="flex gap-2">
                <span>3시간 전</span>
                <span>조회 1,500</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Heart size={12}></Heart> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={12}></MessageCircle> {post.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityListPage;