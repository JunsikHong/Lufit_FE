import { ArrowLeft } from "lucide-react";
import Button from "@/pages/common/ui/Button";
import { useNavigate } from "react-router-dom";

const BoardHeader = () => {
    const navigate = useNavigate();

    return (
        <header className="w-full bg-white flex items-center justify-start gap-4 px-6 py-4">
            <Button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-700"
            >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
            </Button>
            <div className="text-2xl font-semibold">
                커뮤니티
            </div>
        </header>
    );
};

export default BoardHeader;