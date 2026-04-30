import { useState } from "react";
import InputString from "@/pages/common/ui/InputString";
import InputPassword from "@/pages/common/ui/InputPassword";
import InputButton from "@/pages/common/ui/InputButton";
import InputCheck from "@/pages/common/ui/InputCheck";
import Button from "@/pages/common/ui/Button";
import CtaButton from "@/pages/common/ui/CtaButton";

const Join = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
        passwordConfirm: "",
        name: "",
        phone: "",
        email: "",
        referral: "",
    });

    const [checked, setChecked] = useState({
        username: false,
        phone: false,
    });

    const [expanded, setExpanded] = useState<string | null>(null);

    const [agree, setAgree] = useState({
        all: false,
        terms: false,
        privacy: false,
        marketing: false,
    });

    const handleChange = (key: string, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleAgreeAll = () => {
        const next = !agree.all;
        setAgree({
            all: next,
            terms: next,
            privacy: next,
            marketing: next,
        });
    };

    type AgreeKey = "all" | "terms" | "privacy" | "marketing";

    const handleAgree = (key: AgreeKey) => {
        const next = { ...agree, [key]: !agree[key] };
        next.all = next.terms && next.privacy && next.marketing;
        setAgree(next);
    };

    const isValid =
        form.username &&
        form.password &&
        form.password === form.passwordConfirm &&
        form.phone &&
        agree.terms &&
        agree.privacy;

    const handleJoin = () => {

    }

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="space-y-3">
                <h2 className="font-semibold">계정 정보</h2>
                <div className="flex gap-2">
                    <InputString
                        value={form.username}
                        onChange={(v) => handleChange("username", v)}
                        placeholder="아이디"
                    />
                    <InputButton
                        label="중복확인"
                        active={checked.username}
                        onClick={() => setChecked((prev) => ({ ...prev, username: true }))}
                    />
                </div>
                <InputPassword
                    value={form.password}
                    onChange={(v) => handleChange("password", v)}
                    placeholder="비밀번호"
                />
                <InputPassword
                    value={form.passwordConfirm}
                    onChange={(v) => handleChange("passwordConfirm", v)}
                    placeholder="비밀번호 확인"
                />
            </div>
            <div className="space-y-3">
                <h2 className="font-semibold">사용자 정보</h2>
                <InputString
                    value={form.name}
                    onChange={(v) => handleChange("name", v)}
                    placeholder="이름"
                />
                <div className="flex gap-2">
                    <InputString
                        value={form.phone}
                        onChange={(v) => handleChange("phone", v)}
                        placeholder="전화번호"
                    />
                    <InputButton
                        label="인증"
                        active={checked.phone}
                        onClick={() => setChecked((prev) => ({ ...prev, phone: true }))}
                    />
                </div>
                <InputString
                    value={form.email}
                    onChange={(v) => handleChange("email", v)}
                    placeholder="이메일"
                />
            </div>
            <div className="space-y-3">
                <h2 className="font-semibold">선택 정보</h2>
                <InputString
                    value={form.referral}
                    onChange={(v) => handleChange("referral", v)}
                    placeholder="추천인 코드"
                />
            </div>
            <div className="space-y-2 mb-6">
                <h2 className="font-semibold">약관 동의</h2>
                <div className="p-4 bg-gray-200 rounded-xl">
                    <InputCheck
                        checked={agree.all}
                        onChange={handleAgreeAll}
                        label="전체 동의"
                    />
                </div>
                <div className="px-4 py-2 bg-gray-200 rounded-xl">
                    <div className="flex items-center justify-between">
                        <InputCheck
                            checked={agree.terms}
                            onChange={() => handleAgree("terms")}
                            label="(필수) 서비스 이용약관"
                        />
                        <Button onClick={() => setExpanded(expanded === "terms" ? null : "terms")}>
                            보기
                        </Button>
                    </div>
                    {expanded === "terms" && (
                        <div className="mt-3 p-3 bg-white rounded-lg text-sm text-gray-600 max-h-40 overflow-y-auto">
                            <p>제1조 (목적)</p>
                            <p>본 약관은 Lufit 서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 당사의 권리, 의무, 책임사항 등 기본적인 사항을 규정함을 목적으로 합니다.</p>
                            <p className="mt-3">제2조 (용어의 정의)</p>
                            <p>1. "서비스"란 당사가 제공하는 건강 관리 및 루틴 관리 플랫폼을 의미합니다.</p>
                            <p>2. "이용자"란 본 약관에 동의하고 서비스를 이용하는 개인을 의미합니다.</p>
                            <p className="mt-3">제3조 (약관의 효력 및 변경)</p>
                            <p>1. 본 약관은 이용자가 서비스에 가입함으로써 효력이 발생합니다.</p>
                            <p>2. 당사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지합니다.</p>
                            <p className="mt-3">제4조 (서비스의 제공)</p>
                            <p>당사는 이용자에게 다음과 같은 서비스를 제공합니다:</p>
                            <p>- 건강 데이터 관리</p>
                            <p>- 운동 루틴 추천 및 추적</p>
                            <p>- 커뮤니티 기능</p>
                            <p>- 기타 건강 관련 정보 제공</p>
                            <p className="mt-3">제5조 (이용자의 의무)</p>
                            <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
                            <p>- 타인의 정보 도용</p>
                            <p>- 서비스의 정상적 운영 방해</p>
                            <p>- 법령 위반 행위</p>
                            <p className="mt-3">제6조 (서비스 이용의 제한)</p>
                            <p>당사는 이용자가 본 약관을 위반한 경우 서비스 이용을 제한할 수 있습니다.</p>
                            <p className="mt-3">제7조 (면책조항)</p>
                            <p>당사는 천재지변 등 불가항력으로 인한 서비스 장애에 대해 책임을 지지 않습니다.</p>
                        </div>
                    )}
                </div>
                <div className="px-4 py-2 bg-gray-200 rounded-xl">
                    <div className="flex items-center justify-between">
                        <InputCheck
                            checked={agree.privacy}
                            onChange={() => handleAgree("privacy")}
                            label="(필수) 개인정보 수집 및 이용"
                        />
                        <Button onClick={() => setExpanded(expanded === "privacy" ? null : "privacy")}>
                            보기
                        </Button>
                    </div>
                    {expanded === "privacy" && (
                        <div className="mt-3 p-3 bg-white rounded-lg text-sm text-gray-600 max-h-40 overflow-y-auto">
                            <p>제1조 (개인정보의 수집 및 이용 목적)</p>
                            <p>당사는 이용자의 개인정보를 다음과 같은 목적으로 수집 및 이용합니다:</p>
                            <p>1. 서비스 제공 및 회원 관리</p>
                            <p>2. 서비스 개선 및 신규 서비스 개발</p>
                            <p>3. 고객 상담 및 불만 처리</p>
                            <p>4. 법적 의무 이행</p>
                            <p className="mt-3">제2조 (수집하는 개인정보의 항목)</p>
                            <p>- 필수항목: 이름, 아이디, 비밀번호, 전화번호, 이메일</p>
                            <p>- 선택항목: 추천인 코드, 건강 관련 데이터</p>
                            <p className="mt-3">제3조 (개인정보의 보유 및 이용 기간)</p>
                            <p>이용자의 개인정보는 회원 탈퇴 시까지 보유하며, 법령에 따른 보존 기간이 있는 경우 해당 기간 동안 보유합니다.</p>
                            <p className="mt-3">제4조 (개인정보의 제3자 제공)</p>
                            <p>당사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만, 법령에 따른 경우는 예외로 합니다.</p>
                            <p className="mt-3">제5조 (개인정보의 파기)</p>
                            <p>개인정보 보유 기간이 경과하거나 목적이 달성된 경우 지체 없이 파기합니다.</p>
                            <p className="mt-3">제6조 (이용자의 권리)</p>
                            <p>이용자는 언제든지 개인정보 열람, 정정, 삭제를 요구할 수 있습니다.</p>
                        </div>
                    )}
                </div>
                <div className="px-4 py-2 bg-gray-200 rounded-xl">
                    <div className="flex items-center justify-between">
                        <InputCheck
                            checked={agree.marketing}
                            onChange={() => handleAgree("marketing")}
                            label="(선택) 마케팅 수신 동의"
                        />
                        <Button onClick={() => setExpanded(expanded === "marketing" ? null : "marketing")}>
                            보기
                        </Button>
                    </div>
                    {expanded === "marketing" && (
                        <div className="mt-3 p-3 bg-white rounded-lg text-sm text-gray-600 max-h-40 overflow-y-auto">
                            <p>제1조 (마케팅 정보 수신 동의)</p>
                            <p>이용자는 Lufit 서비스의 마케팅 정보(이벤트, 프로모션, 뉴스레터 등)를 수신하는 것에 동의합니다.</p>
                            <p className="mt-3">제2조 (수신 방법)</p>
                            <p>마케팅 정보는 이메일, SMS, 앱 푸시 알림 등을 통해 제공될 수 있습니다.</p>
                            <p className="mt-3">제3조 (동의 철회)</p>
                            <p>이용자는 언제든지 마케팅 정보 수신을 거부할 수 있으며, 이 경우 즉시 수신이 중단됩니다.</p>
                            <p className="mt-3">제4조 (정보 활용)</p>
                            <p>수집된 개인정보는 마케팅 목적으로만 사용되며, 다른 목적으로 활용되지 않습니다.</p>
                        </div>
                    )}
                </div>
            </div>
            <CtaButton
                label="회원가입"
                onClick={handleJoin}
                bgColor="bg-black"
                textColor="text-white"
                disabled={!isValid}
            />
        </div>
    );
};

export default Join;