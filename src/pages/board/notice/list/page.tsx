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
  { id: 1, title: "서비스 점검 안내", content: "4월 30일 오전 2시부터 4시까지 서비스 점검이 진행됩니다...", author: "관리자", likes: 0, comments: 2, createdAt: "2026-04-28", category: "서비스", },
  { id: 2, title: "새로운 기능 업데이트", content: "건강 데이터 분석 기능이 추가되었습니다.", author: "관리자", likes: 5, comments: 8, createdAt: "2026-04-25", category: "업데이트", },
  { id: 3, title: "봄맞이 건강 이벤트", content: "5월 한 달간 운동 챌린지 이벤트가 진행됩니다.", author: "관리자", likes: 15, comments: 12, createdAt: "2026-04-20", category: "이벤트", },
  { id: 4, title: "개인정보 처리방침 변경", content: "개인정보 처리방침이 업데이트되었습니다. 확인 부탁드립니다.", author: "관리자", likes: 3, comments: 5, createdAt: "2026-04-15", category: "서비스", },
  { id: 5, title: "앱 버전 2.1 출시", content: "새로운 UI와 개선된 기능을 만나보세요.", author: "관리자", likes: 10, comments: 6, createdAt: "2026-04-10", category: "업데이트", },
  { id: 6, title: "여름 준비 다이어트 이벤트", content: "6월 한 달간 특별 다이어트 프로그램을 운영합니다.", author: "관리자", likes: 20, comments: 18, createdAt: "2026-04-05", category: "이벤트", },
];

const categories = ["전체", "서비스", "업데이트", "이벤트"];

const NoticeListPage = () => {
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

export default NoticeListPage;