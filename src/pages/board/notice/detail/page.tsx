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
  title: "서비스 점검 안내",
  content: `안녕하세요, Lufit 운영팀입니다.

보다 나은 서비스 제공을 위해 아래와 같이 서비스 점검이 진행될 예정입니다.

점검 일시: 2026년 4월 30일 오전 2시 ~ 4시 (2시간)
점검 내용: 서버 안정화 및 기능 개선
예상 영향: 서비스 이용이 일시적으로 제한될 수 있습니다.

점검 시간 동안 불편을 드려 죄송합니다.
더 좋은 서비스로 보답하겠습니다.

감사합니다.`,
  author: "관리자",
  likes: 0,
  comments: 2,
  createdAt: "2026-04-28",
  category: "서비스",
};

const dummyComments: CommentItem[] = [
  {
    id: 1,
    author: "user123",
    content: "점검 시간 확인했습니다. 감사합니다!",
    createdAt: "2026-04-28 14:30",
  },
  {
    id: 2,
    author: "healthfan",
    content: "점검 끝나고 새로운 기능 기대되네요!",
    createdAt: "2026-04-28 15:45",
  },
];

const dummyPosts: PostItem[] = [
  { id: 1, title: "서비스 점검 안내", content: "4월 30일 오전 2시부터 4시까지 점검이 진행됩니다.", author: "관리자", likes: 0, comments: 2, createdAt: "2026-04-28", category: "서비스", },
  { id: 2, title: "새로운 기능 업데이트", content: "건강 데이터 분석 기능이 추가되었습니다.", author: "관리자", likes: 5, comments: 8, createdAt: "2026-04-25", category: "업데이트", },
  { id: 3, title: "개인정보 처리방침 변경", content: "개인정보 처리방침이 업데이트되었습니다.", author: "관리자", likes: 3, comments: 5, createdAt: "2026-04-15", category: "서비스", },
  { id: 4, title: "앱 버전 2.1 출시", content: "새로운 UI와 개선된 기능을 만나보세요.", author: "관리자", likes: 10, comments: 6, createdAt: "2026-04-10", category: "업데이트", },
];

const NoticeDetailPage = () => {
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

export default NoticeDetailPage;