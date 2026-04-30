import NavigationSection from "@/pages/common/menu/components/NavigationSection";
import BannerSection from "@/pages/common/menu/components/BannerSection";
import { LogOut, LogIn } from "lucide-react";
import Button from "@/pages/common/ui/Button";
import { useUser } from "@/api/useUser";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
    const navigate = useNavigate();
    const { data: user } = useUser();

    return (
        <div className="absolute inset-0 z-50 bg-white flex flex-col overflow-y-auto px-4 space-y-6 py-4">
            <BannerSection />
            <NavigationSection />
            <div className="mt-3 px-6 py-6 flex justify-end gap-3">
                
                {user ? (
                    <Button className="flex items-center gap-4 px-4 py-3 rounded-full text-red-500 hover:bg-red-50 transition">
                        <LogOut className="w-6 h-6" />
                        <span className="font-medium">로그아웃</span>
                    </Button>
                ) : (
                    <Button 
                        onClick={() => navigate("/login")}
                        className="flex items-center gap-4 px-4 py-3 rounded-full text-black-500 hover:bg-gray-100 transition"
                    >
                        <LogIn className="w-6 h-6" />
                        <span className="font-medium">로그인</span>
                    </Button>
                )}

            </div>
        </div>
    );
}

export default MenuPage;