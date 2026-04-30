import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/pages/common/ui/Button";
import CtaButton from "@/pages/common/ui/CtaButton";
import InputString from "@/pages/common/ui/InputString";
import InputPassword from "@/pages/common/ui/InputPassword";
import kakaoLoginImg from "@/assets/kakao_login.png";
import naverLoginImg from "@/assets/naver_login.png";
import appleLoginImg from "@/assets/apple_login.png";
import googleLoginImg from "@/assets/google_login.png";

const Login = () => {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

    }

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="text-center space-y-1 mb-6">
                <div className="text-2xl font-bold">
                    LUFIT
                </div>
                <div className="text-sm text-gray-500">
                    건강한 루틴을 시작해보세요
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                    <InputString
                        value={id}
                        onChange={setId}
                        placeholder="아이디 입력"
                    />
                </div>
                <div>
                    <InputPassword
                        value={password}
                        onChange={setPassword}
                        placeholder="비밀번호 입력"
                    />
                </div>
            </div>
            <CtaButton
                label="로그인"
                onClick={handleLogin}
                bgColor="bg-black"
                textColor="text-white"
                disabled={!id || !password}
            />
            <div className="flex justify-between text-sm text-gray-500 mb-4">
                <Button onClick={() => navigate("/forget")}>
                    비밀번호 찾기
                </Button>
                <Button onClick={() => navigate("/join")}>
                    회원가입
                </Button>
            </div>
            <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">SNS 로그인</span>
                <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="space-y-2">
                <button
                    className="w-full h-12 rounded-xl bg-[#FEE500] "
                    style={{
                        backgroundImage: `url(${kakaoLoginImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "auto 100%"
                    }}
                />
                <button
                    className="w-full h-12 rounded-xl bg-[#03A94D] "
                    style={{
                        backgroundImage: `url(${naverLoginImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "auto 100%"
                    }}
                />
                <button className="w-full h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center gap-2 active:scale-[0.98] transition">
                    <img
                        src={appleLoginImg}
                        alt="apple"
                        className="h-5 object-contain"
                    />
                    <span className="text-sm font-semibold text-black">
                        Apple 로그인
                    </span>
                </button>
                <button className="w-full h-12 rounded-xl bg-white border border-gray-300 flex items-center justify-center gap-2 active:scale-[0.98] transition">
                    <img
                        src={googleLoginImg}
                        alt="google"
                        className="h-5 object-contain"
                    />
                    <span className="text-sm font-semibold text-black">
                        Google 로그인
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Login;