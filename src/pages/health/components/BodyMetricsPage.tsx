import { useState } from "react";
import InputNumber from "@/pages/common/ui/InputNumber";
import FadeIn from "@/pages/common/overlay/FadeIn";
import InputButton from "@/pages/common/ui/InputButton";

const BodyMetricsPage = () => {
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [bodyFat, setBodyFat] = useState<number | "">("");

  return (
    <div className="px-6 py-8 flex flex-col gap-6">
      <FadeIn show={true}>
        <InputNumber
          useModal={true}
          label="나이"
          placeholder="나이를 입력해주세요"
          value={age}
          onChange={(value) => setAge(value === "" ? "" : Number(value))}
        />
      </FadeIn>
      <FadeIn show={age !== ""}>
        <div className="flex gap-3">
          <InputButton
            label="남성"
            active={gender === "male"}
            onClick={() => setGender("male")}
          />
          <InputButton
            label="여성"
            active={gender === "female"}
            onClick={() => setGender("female")}
          />
        </div>
      </FadeIn>
      <FadeIn show={gender !== ""}>
        <InputNumber
          label="키"
          placeholder="키를 입력해주세요 (cm)"
          value={height}
          onChange={(value) => setHeight(value === "" ? "" : Number(value))}
        />
      </FadeIn>
      <FadeIn show={height !== ""}>
        <InputNumber
          label="몸무게"
          placeholder="몸무게를 입력해주세요 (kg)"
          value={weight}
          onChange={(value) => setWeight(value === "" ? "" : Number(value))}
        />
      </FadeIn>
      <FadeIn show={weight !== ""}>
        <InputNumber
          label="체지방률"
          placeholder="체지방률을 입력해주세요 (%)"
          value={bodyFat}
          onChange={(value) => setBodyFat(value === "" ? "" : Number(value))}
        />
      </FadeIn>
      <FadeIn show={bodyFat !== ""}>
        <button className="mt-6 w-full py-4 rounded-full bg-green-500 text-white font-semibold">
          다음
        </button>
      </FadeIn>
    </div>
  );
};

export default BodyMetricsPage;