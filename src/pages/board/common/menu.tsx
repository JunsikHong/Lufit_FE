import { Siren } from "lucide-react";

interface BoardMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onReport: () => void;
}

const BoardMenu = ({ isOpen, onClose, onReport }: BoardMenuProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* 바깥 클릭 닫기 */}
      <div className="fixed inset-0 z-10" onClick={onClose} />

      {/* 메뉴 */}
      <div className="absolute right-0 top-2 z-20 bg-white border rounded-md w-28">
        <button
          onClick={() => {
            onReport();
            onClose();
          }}
          className="w-full text-center px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-1"
        >
          <Siren size={16} />신고하기
        </button>
      </div>
    </>
  );
};

export default BoardMenu;