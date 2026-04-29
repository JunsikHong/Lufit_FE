import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import BoardMenu from "@/pages/board/common/menu";

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

interface ListProps {
  posts: PostItem[];
}

const List = ({ posts }: ListProps) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  return (
    <div>
      {posts.map((post) => {
        const isOpen = openMenuId === post.id;

        return (
          <div key={post.id} className="bg-white border-b p-4 relative">
            {/* top */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                {post.category}
              </span>

              <div className="relative">
                <button
                  className="text-gray-500"
                  onClick={() =>
                    setOpenMenuId(isOpen ? null : post.id)
                  }
                >
                  ⋯
                </button>

                <BoardMenu
                  isOpen={isOpen}
                  onClose={() => setOpenMenuId(null)}
                  onReport={() => {
                    alert(`${post.id} 신고됨`);
                  }}
                />
              </div>
            </div>

            {/* title */}
            <h2 className="font-semibold text-base mb-1">
              {post.title}
            </h2>

            {/* content */}
            <div className="flex justify-between gap-3 mb-3">
              <p className="text-sm text-gray-500 line-clamp-2 flex-1">
                {post.content}
              </p>
            </div>

            {/* bottom */}
            <div className="flex justify-between items-center text-xs text-gray-400">
              <div className="flex gap-2">
                <span>3시간 전</span>
                <span>조회 1,500</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Heart size={12} /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={12} /> {post.comments}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;