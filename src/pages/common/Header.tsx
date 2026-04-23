import { Bell, Menu } from "lucide-react";
import Button from "@/pages/common/Button";

const Header = ({ onMenuOpen = () => {} }) => {
  return (
    <header className="w-full h-20 border-b border-gray-200 bg-white flex items-center justify-between px-6">
      <div className="text-2xl font-semibold text-green-500 tracking-tight">
        LUFIT
      </div>
      <div className="flex items-center">
        <Button>
          <Bell className="w-6 h-6 text-gray-700" />
        </Button>

        <Button onClick={onMenuOpen}>
          <Menu className="w-6 h-6 text-gray-700" />
        </Button>
      </div>
    </header>
  );
};

export default Header;