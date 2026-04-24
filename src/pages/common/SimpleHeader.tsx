import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "@/pages/common/Button";

const SimpleHeader = () => {
    const navigate = useNavigate();

    return (
        <header className="w-full bg-white flex items-center justify-between px-6 py-4">
            <Button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-700"
            >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
            </Button>
        </header>
    );
}

export default SimpleHeader;