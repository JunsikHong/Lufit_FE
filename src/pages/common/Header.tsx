import { X, Bell, Menu, Settings } from "lucide-react";
import Button from "@/pages/common/Button";
import { useNavigate } from "react-router-dom";

type View = "home" | "menu" | "notification";

interface Props {
  view: View;
  onMenuOpen: () => void;
  onMenuClose: () => void;
  onNotificationOpen: () => void;
  onNotificationClose: () => void;
}

const Header = ({
  view,
  onMenuOpen,
  onMenuClose,
  onNotificationOpen,
}: Props) => {
  const isMenu = view === "menu";
  const isNotification = view === "notification";
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white flex items-center justify-between px-6 py-4">
      <button 
        onClick={() => navigate('/')}
        className="text-2xl font-semibold text-green-500 tracking-tight">
        LUFIT
      </button>
      <div className="flex items-center gap-2">
        <Button
          onClick={
            isNotification ? () => navigate('/notification/settings') : onNotificationOpen
          }
        >
          {isNotification ? (
            <Settings className="w-6 h-6 text-gray-700" />
          ) : (
            <Bell className="w-6 h-6 text-gray-700" />
          )}
        </Button>
        <Button
          onClick={
            isMenu || isNotification ? onMenuClose : onMenuOpen
          }
        >
          {isMenu || isNotification ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;