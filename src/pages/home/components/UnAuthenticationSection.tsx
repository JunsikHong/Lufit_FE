import CtaButton from "@/pages/common/ui/CtaButton";
import { useNavigate } from "react-router-dom";
const UnAuthenticationSection = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4">
            <div className="space-y-1">
                <div className="text-lg font-semibold">
                    건강한 습관을 만들어보세요
                </div>
                <div className="text-sm text-gray-500">
                    건강 관리, 포인트, 맞춤 추천까지
                </div>
            </div>
            <div className="flex gap-2">
                <CtaButton
                    className="flex-1"
                    onClick={() => navigate('/login')}
                    label="로그인"                
                />
                <CtaButton
                    className="flex-1"
                    onClick={() => navigate('/join')}
                    label="회원가입"
                />  
            </div>
            <div className="text-xs text-gray-400 text-center">
                가입하면 크레딧과 다양한 혜택을 받을 수 있어요
            </div>
        </div>
    );
}

export default UnAuthenticationSection;