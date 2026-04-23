import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SimpleHeader = () => {
  const navigate = useNavigate();

    return (
        <header className="h-16 flex items-center px-6 border-b border-gray-200 bg-white">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-700"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
            </button>
        </header>
    );
}

export default SimpleHeader;