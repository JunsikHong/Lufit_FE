import CtaButton from "@/pages/common/ui/CtaButton";

const IntroPage = ({ onStart }: { onStart: () => void }) => {
    return (
        <div className="px-6 flex flex-col">
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 leading-snug">
                    AI 기반으로<br />
                    당신에게 맞는 건강습관을 추천해드릴게요
                </h1>
                <p className="text-gray-500 mt-3 text-sm">
                    간단한 정보를 입력하면, 개인 맞춤 건강 루틴을 만들어드립니다.
                </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                <ul className="flex flex-col gap-3 text-sm text-gray-700">
                    <li>✔️ 현재 건강 상태 분석</li>
                    <li>✔️ 생활습관 기반 맞춤 추천</li>
                    <li>✔️ 지속 가능한 건강 루틴 제공</li>
                </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <p className="text-xs text-yellow-800 leading-relaxed">
                    본 서비스는 건강 관리 참고용으로 제공되며, 의료적 진단이나 치료를 대체하지 않습니다.<br />
                    지병이 있거나 약을 복용 중이라면 반드시 전문의와 상담 후 이용해주세요.
                </p>
            </div>
            <CtaButton
                label="시작하기"
                onClick={onStart}
                bgColor="bg-green-500"
                textColor="text-white"
            />
        </div>
    );
};

export default IntroPage;