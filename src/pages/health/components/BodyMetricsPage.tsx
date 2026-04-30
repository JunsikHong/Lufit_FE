import { useState } from "react";
import InputNumber from "@/pages/common/ui/InputNumber";
import InputRadio from "@/pages/common/ui/InputRadio";
import CtaButton from "@/pages/common/ui/CtaButton";

const BodyMetricsPage = ({ onNext }: { onNext: () => void }) => {
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [bodyFat, setBodyFat] = useState<number | "">("");

  return (
    <div className="px-6 py-8 flex flex-col gap-3">
      <InputNumber
        label="나이"
        placeholder="나이를 입력해주세요"
        value={age}
        onChange={(value) => setAge(value === "" ? "" : Number(value))}
      />
      <InputRadio
        options={[
          { label: "남성", value: "male" },
          { label: "여성", value: "female" },
        ]}
        value={gender}
        onChange={(val) => setGender(val as "male" | "female")}
      />
      <InputNumber
        label="키"
        placeholder="키를 입력해주세요 (cm)"
        value={height}
        onChange={(value) => setHeight(value === "" ? "" : Number(value))}
      />
      <InputNumber
        label="몸무게"
        placeholder="몸무게를 입력해주세요 (kg)"
        value={weight}
        onChange={(value) => setWeight(value === "" ? "" : Number(value))}
      />
      <InputNumber
        label="체지방률"
        placeholder="체지방률을 입력해주세요 (%)"
        value={bodyFat}
        onChange={(value) => setBodyFat(value === "" ? "" : Number(value))}
      />
      <CtaButton
        label="다음"
        onClick={onNext}
        bgColor="bg-green-500"
        textColor="text-white"
        disabled={age === "" || gender === "" || height === "" || weight === "" || bodyFat === ""}
      />
    </div>
  );
};

export default BodyMetricsPage;