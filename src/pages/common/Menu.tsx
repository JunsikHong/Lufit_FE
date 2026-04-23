import { X, User, Home, Activity, Sparkles, Settings, LogOut, Bell } from "lucide-react";
import Button from "@/pages/common/Button";

const Menu = ({ onClose = () => { } }) => {
    return (
        <div className="absolute inset-0 z-50 bg-white flex flex-col overflow-y-auto">
            <Button className="absolute top-4 right-16">
                <Bell className="w-6 h-6 text-gray-700" />
            </Button>
            <Button
                onClick={onClose}
                className="absolute top-4 right-4"
            >
                <X className="w-6 h-6 text-gray-700" />
            </Button>
            <div className="px-6 mt-16">
                <div className="bg-white rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-500" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">홍준식</p>
                            <p className="text-sm text-gray-500">오늘도 건강한 하루 💪</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-green-500 rounded-full" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">건강 지수 66%</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>오늘 목표</span>
                        <span className="font-medium text-green-500">2 / 3 완료</span>
                    </div>
                </div>
            </div>
            <div className="px-6 mt-8 flex flex-col gap-3">
                <button className="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-100 transition">
                    <Home className="w-6 h-6 text-gray-700" />
                    <span className="font-medium">홈</span>
                </button>
                <button className="flex items-center gap-4 px-4 py-3 rounded-full bg-green-50 text-green-600 transition">
                    <Sparkles className="w-6 h-6" />
                    <span className="font-medium">AI 건강추천</span>
                </button>
                <button className="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-100 transition">
                    <Activity className="w-6 h-6 text-gray-700" />
                    <span className="font-medium">건강 루틴</span>
                </button>
            </div>
            <div className="mt-3 px-6 py-6 flex justify-end gap-3">
                <Button className="flex items-center gap-4 px-4 py-3 rounded-full hover:bg-gray-100 transition">
                    <Settings className="w-6 h-6 text-gray-700" />
                    <span className="font-medium">설정</span>
                </Button>
                <Button className="flex items-center gap-4 px-4 py-3 rounded-full text-red-500 hover:bg-red-50 transition">
                    <LogOut className="w-6 h-6" />
                    <span className="font-medium">로그아웃</span>
                </Button>
            </div>
        </div>
    );
};

export default Menu;