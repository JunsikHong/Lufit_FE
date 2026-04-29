import { useState } from "react";
import BoardDetail from "@/pages/board/common/detail";
import Comment from "@/pages/board/common/comment";
import BoardList from "@/pages/board/common/list";

export interface CommentItem {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

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

const dummyPost: PostItem = {
  id: 1,
  title: "운동 루틴 공유합니다",
  content: `안녕하세요! 저는 최근에 홈트레이닝을 시작했는데, 아주 효과적인 루틴을 발견해서 공유합니다.

하루 30분 정도로 충분한 운동 루틴입니다:

1. 워밍업 (5분): 가벼운 스트레칭
2. 메인 운동 (20분): 전신 근력 운동 + 유산소
3. 쿨다운 (5분): 명상과 스트레칭

특히 아침에 운동하면 하루 종일 기분이 좋더라고요. 여러분도 한번 시도해보세요!

궁금한 점 있으면 댓글 남겨주세요!`,
  author: "junsik",
  likes: 12,
  comments: 4,
  createdAt: "2026-04-28",
  category: "운동",
};

const dummyComments: CommentItem[] = [
  {
    id: 1,
    author: "user123",
    content: "정말 좋은 정보 감사합니다!",
    createdAt: "2026-04-28 14:30",
  },
  {
    id: 2,
    author: "runner",
    content: "저도 이 루틴 따라해봐야겠네요.",
    createdAt: "2026-04-28 15:45",
  },
  {
    id: 3,
    author: "healthfan",
    content: "질문 있는데, 하루에 몇 번 반복해야 하나요?",
    createdAt: "2026-04-28 16:20",
  },
];

const dummyPosts: PostItem[] = [
  { id: 1, title: "운동 루틴 공유합니다", content: "하루 30분 홈트로 충분합니다...", author: "junsik", likes: 12, comments: 4, createdAt: "2026-04-28", category: "운동", },
  { id: 2, title: "다이어트 식단 질문", content: "이렇게 먹어도 될까요?", author: "user123", likes: 8, comments: 10, createdAt: "2026-04-27", category: "식단", },
  { id: 3, title: "러닝 초보 팁", content: "처음 시작하는 분들 꼭 보세요", author: "runner", likes: 25, comments: 7, createdAt: "2026-04-26", category: "러닝", },
  { id: 4, title: "헬스 장비 추천", content: "집에서 할 수 있는 효과적인 장비들", author: "fitness", likes: 18, comments: 5, createdAt: "2026-04-25", category: "운동", },
];

const CommunityDetailPage = () => {
  const [comments, setComments] = useState<CommentItem[]>(dummyComments);

  const handleLike = () => {
    console.log("좋아요 클릭");
    // TODO: API 호출로 좋아요 처리
  };

  const handleEdit = () => {
    console.log("수정 클릭");
    // TODO: 수정 페이지로 이동
  };

  const handleDelete = () => {
    console.log("삭제 클릭");
    // TODO: 삭제 확인 후 API 호출
  };

  const handleAddComment = (content: string) => {
    const newComment: CommentItem = {
      id: comments.length + 1,
      author: "currentUser",
      content,
      createdAt: new Date().toLocaleString("ko-KR"),
    };
    setComments([...comments, newComment]);
  };

  return (
    <>
      <BoardDetail
        post={dummyPost}
        onLike={handleLike}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isAuthor={false}
      />
      <div className="bg-gray-200 h-4 mx-auto max-w-4xl"></div>
      <Comment comments={comments} onAddComment={handleAddComment} />
      <div className="bg-gray-200 h-4 mx-auto max-w-4xl"></div>
      <BoardList posts={dummyPosts} />
    </>
  );
};

export default CommunityDetailPage;