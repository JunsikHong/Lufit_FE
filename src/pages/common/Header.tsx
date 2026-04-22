import { Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-20 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      
      {/* 로고 */}
      <div className="text-2xl font-semibold text-green-500 tracking-tight">
        LUFIT
      </div>

      {/* 아이콘 영역 */}
      <div className="flex items-center gap-5">
        
        <button className="p-2.5 rounded-full hover:bg-gray-100 transition">
          <Bell className="w-6 h-6 text-gray-700" />
        </button>

        <button className="p-2.5 rounded-full hover:bg-gray-100 transition">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

      </div>

    </header>
  );
};

export default Header;