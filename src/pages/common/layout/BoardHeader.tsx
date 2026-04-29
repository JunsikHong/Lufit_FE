import { ArrowLeft } from "lucide-react";
import Button from "@/pages/common/ui/Button";
import { useNavigate, useLocation } from "react-router-dom";

const BoardHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const getBoardName = () => {
        const path = location.pathname;
        const pathSegment = path.split("/")[1];
        const boardNameMap: Record<string, string> = {
            community: "커뮤니티",
            faq: "FAQ",
            notice: "공지사항",
        };
        return boardNameMap[pathSegment];
    };

    return (
        <header className="w-full bg-white flex items-center justify-start gap-4 px-6 py-4">
            <Button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-700"
            >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
            </Button>
            <div className="text-2xl font-semibold">
                {getBoardName()}
            </div>
        </header>
    );
};

export default BoardHeader;