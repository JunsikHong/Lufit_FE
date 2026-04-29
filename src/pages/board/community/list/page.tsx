import { useState } from "react";
import BoardFilter from "@/pages/board/common/filter";
import BoardList from "@/pages/board/common/list";

export interface PostItem {
  id: number;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
  createdAt: string;
  category: string;
}

const dummyPosts: PostItem[] = [
  { id: 1, title: "운동 루틴 공유합니다", content: "하루 30분 홈트로 충분합니다...", author: "junsik", likes: 12, comments: 4, createdAt: "2026-04-28", category: "운동", }, { id: 2, title: "다이어트 식단 질문", content: "이렇게 먹어도 될까요?", author: "user123", likes: 8, comments: 10, createdAt: "2026-04-27", category: "식단", }, { id: 3, title: "러닝 초보 팁", content: "처음 시작하는 분들 꼭 보세요", author: "runner", likes: 25, comments: 7, createdAt: "2026-04-26", category: "러닝", }, { id: 4, title: "러닝 초보 팁", content: "처음 시작하는 분들 꼭 보세요", author: "runner", likes: 25, comments: 7, createdAt: "2026-04-26", category: "러닝", }, { id: 5, title: "러닝 초보 팁", content: "처음 시작하는 분들 꼭 보세요", author: "runner", likes: 25, comments: 7, createdAt: "2026-04-26", category: "러닝", },
];

const categories = ["전체", "운동", "식단", "러닝"];

const CommunityListPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("전체");

  const filteredPosts = dummyPosts.filter((post) => {
    const matchCategory =
      category === "전체" || post.category === category;
    const matchSearch = post.title.includes(search);
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <BoardFilter
        categories={categories}
        selectedCategory={category}
        onChangeCategory={setCategory}
        search={search}
        onChangeSearch={setSearch}
      />

      <BoardList posts={filteredPosts} />
    </div>
  );
};

export default CommunityListPage;