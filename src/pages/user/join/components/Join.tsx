import { useState } from "react";
import InputString from "@/pages/common/InputString";
import InputPassword from "@/pages/common/InputPassword";

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

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

            {/* 계정 정보 */}
            <div className="space-y-3">
                <h2 className="font-semibold">계정 정보</h2>

                <div className="flex gap-2">
                    <InputString
                        value={form.username}
                        onChange={(v) => handleChange("username", v)}
                        placeholder="아이디"
                    />
                    <button className="px-3 rounded-xl border border-gray-300 text-sm">
                        중복확인
                    </button>
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

            {/* 사용자 정보 */}
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
                    <button className="px-3 rounded-xl border border-gray-300 text-sm">
                        인증
                    </button>
                </div>

                <InputString
                    value={form.email}
                    onChange={(v) => handleChange("email", v)}
                    placeholder="이메일"
                />
            </div>

            {/* 선택 정보 */}
            <div className="space-y-3">
                <h2 className="font-semibold">선택 정보</h2>

                <InputString
                    value={form.referral}
                    onChange={(v) => handleChange("referral", v)}
                    placeholder="추천인 코드"
                />
            </div>

            {/* 약관 동의 */}
            <div className="space-y-2">
                <h2 className="font-semibold">약관 동의</h2>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={agree.all}
                        onChange={handleAgreeAll}
                    />
                    전체 동의
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={agree.terms}
                        onChange={() => handleAgree("terms")}
                    />
                    (필수) 서비스 이용약관
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={agree.privacy}
                        onChange={() => handleAgree("privacy")}
                    />
                    (필수) 개인정보 수집 및 이용
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={agree.marketing}
                        onChange={() => handleAgree("marketing")}
                    />
                    (선택) 마케팅 수신 동의
                </label>
            </div>

            {/* 가입 버튼 */}
            <button
                disabled={!isValid}
                className={`
          w-full h-12 rounded-xl font-semibold
          ${isValid ? "bg-black text-white" : "bg-gray-200 text-gray-400"}
        `}
            >
                회원가입
            </button>

        </div>
    );
};

export default Join;