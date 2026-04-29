import { useState } from "react";
import { Heart, Share2, MessageCircle } from "lucide-react";
import Button from "@/pages/common/ui/Button";

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

interface BoardDetailProps {
  post: PostItem;
  onLike?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  isAuthor?: boolean;
}

const BoardDetail = ({ post, onLike, onEdit, onDelete, isAuthor = false }: BoardDetailProps) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    onLike?.();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 게시물 헤더 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {post.category}
          </span>
          {isAuthor && (
            <div className="flex gap-2">
              <Button onClick={onEdit} className="text-sm px-4 py-2">
                수정
              </Button>
              <Button onClick={onDelete} className="text-sm px-4 py-2 bg-red-500 text-white hover:bg-red-600">
                삭제
              </Button>
            </div>
          )}
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span className="font-medium">{post.author}</span>
            <span>{post.createdAt}</span>
          </div>
        </div>
      </div>

      {/* 게시물 내용 */}
      <div className="bg-white rounded-lg  mb-6">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </div>

      {/* 액션 바 */}
      <div className="flex items-center justify-end  border-gray-200 gap-1">
        <div className="flex items-center gap-6">
          <Button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2  transition-colors ${
              liked
                ? "bg-red-50 text-red-600 hover:bg-red-100"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Heart size={20} fill={liked ? "currentColor" : "none"} />
            <span>{post.likes + (liked ? 1 : 0)}</span>
          </Button>
        </div>

        <Button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
          <Share2 size={20} />
          <span>공유</span>
        </Button>
      </div>
    </div>
  );
};

export default BoardDetail;