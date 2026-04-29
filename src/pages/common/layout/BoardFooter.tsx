import { useState } from "react";
import { Send } from "lucide-react";

interface BoardFooterProps {
  onSendComment?: (content: string) => void;
}

const BoardFooter = ({ onSendComment }: BoardFooterProps) => {
  const [comment, setComment] = useState("");

  const handleSend = () => {
    if (comment.trim()) {
      onSendComment?.(comment);
      setComment("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-[750px] fixed bottom-0  bg-white border-t border-gray-200 p-4 z-50">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="댓글을 입력해주세요."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-colors"
        />
        <button
          onClick={handleSend}
          disabled={!comment.trim()}
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
        >
          <Send size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default BoardFooter;