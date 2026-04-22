import { Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      
      <div className="text-xl font-semibold text-green-500">
        HealthApp
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
    </header>
  );
};

export default Header;