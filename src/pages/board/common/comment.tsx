import { useState } from "react";
import { useLocation } from "react-router-dom";
import BoardMenu from "@/pages/board/common/menu";
import { User } from "lucide-react";

export interface CommentItem {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

interface CommentProps {
  comments?: CommentItem[];
  onAddComment?: (content: string) => void;
}

const Comment = ({ comments = [], onAddComment }: CommentProps) => {
  const [newComment, setNewComment] = useState("");
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const location = useLocation();

  const getBoardAndId = () => {
    const pathParts = location.pathname.split("/");
    const board = pathParts[1]; // community, faq, notice
    const id = pathParts[2]; // 글 번호
    return { board, id };
  };

  const { board, id } = getBoardAndId();

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment?.(newComment);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 댓글 입력 */}
        <h3 className="text-sm font-bold mb-2">
          댓글 {comments.length}
        </h3>

      {/* 댓글 리스트 */}
      <div className="space-y-4">
        {comments.map((comment, index) => {
          const isOpen = openMenuId === comment.id;
          const isFirst = index === 0;

          return (
            <div key={comment.id} className="bg-white py-4">
              {/* 댓글 헤더 - 프로필 + 정보 */}
              <div className="flex gap-3 items-start">
                {/* 프로필 이미지 */}
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-gray-400" />
                </div>

                {/* 유저 정보 */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col gap-0.5">
                    <p className="font-semibold text-sm">
                        {comment.author}
                        {isFirst && (
                    <span className="inline-block px-1 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium ml-1">
                      첫 댓글
                    </span>
                  )}
                    </p>
                    <span className="text-xs text-gray-400">{comment.createdAt}</span>
                  </div>
                  
                </div>

                {/* 메뉴 버튼 */}
                <div>
                  <button
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setOpenMenuId(isOpen ? null : comment.id)}
                  >
                    ⋯
                  </button>
                  <BoardMenu
                    isOpen={isOpen}
                    onClose={() => setOpenMenuId(null)}
                    onReport={() => {
                      alert(`댓글 신고: ${board}/${id} - 댓글 ${comment.id}`);
                    }}
                  />
                </div>
              </div>

              {/* 댓글 내용 */}
              <div className="ml-12 mt-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {comment.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
