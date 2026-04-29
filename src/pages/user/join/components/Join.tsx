import { useState } from "react";
import InputString from "@/pages/common/ui/InputString";
import InputPassword from "@/pages/common/ui/InputPassword";
import InputButton from "@/pages/common/ui/InputButton";
import InputCheck from "@/pages/common/ui/InputCheck";
import Button from "@/pages/common/ui/Button";

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

    const termsContent = {
        terms: "서비스 이용약관 내용...",
        privacy: "개인정보 수집 및 이용 내용...",
        marketing: "마케팅 수신 동의 내용...",
    };

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
            <div className="space-y-2">
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
                        <div className="mt-3 p-3 bg-white rounded-lg text-sm text-gray-600">
                            {termsContent.terms}
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
                        <div className="mt-3 p-3 bg-white rounded-lg text-sm text-gray-600">
                            {termsContent.privacy}
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
                        <div className="mt-3 p-3 bg-white rounded-lg text-sm text-gray-600">
                            {termsContent.marketing}
                        </div>
                    )}
                </div>
            </div>
            <button
                disabled={!isValid}
                className={`w-full h-12 rounded-xl font-semibold mt-6 transition
                            ${isValid ? "bg-black text-white" : "bg-gray-200 text-gray-400"}`}
            >
                회원가입
            </button>

        </div>
    );
};

export default Join;