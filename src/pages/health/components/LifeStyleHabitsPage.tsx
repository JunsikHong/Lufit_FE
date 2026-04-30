import { useState } from "react";
import InputRadio from "@/pages/common/ui/InputRadio";
import InputNumber from "@/pages/common/ui/InputNumber";
import CtaButton from "@/pages/common/ui/CtaButton";

const LifeStyleHabitsPage = ({ onNext }: { onNext: () => void }) => {
  const [activityLevel, setActivityLevel] = useState<
    "low" | "medium" | "high" | ""
  >("");
  const [exerciseFreq, setExerciseFreq] = useState<
    "none" | "light" | "regular" | ""
  >("");
  const [sleepHours, setSleepHours] = useState<number | "">("");
  const [stressLevel, setStressLevel] = useState<
    "low" | "medium" | "high" | ""
  >("");

  return (
    <div className="px-6 py-8 flex flex-col gap-4">
      {/* 활동량 */}
      <div>
        <p className="text-sm mb-2">평소 활동량</p>
        <InputRadio
          options={[
            { label: "적음", value: "low" },
            { label: "보통", value: "medium" },
            { label: "많음", value: "high" },
          ]}
          value={activityLevel}
          onChange={(val) =>
            setActivityLevel(val as "low" | "medium" | "high")
          }
        />
      </div>

      {/* 운동 빈도 */}
      <div>
        <p className="text-sm mb-2">운동 빈도</p>
        <InputRadio
          options={[
            { label: "안함", value: "none" },
            { label: "주 1~2회", value: "light" },
            { label: "주 3회 이상", value: "regular" },
          ]}
          value={exerciseFreq}
          onChange={(val) =>
            setExerciseFreq(val as "none" | "light" | "regular")
          }
        />
      </div>

      {/* 수면 시간 */}
      <InputNumber
        label="평균 수면 시간"
        placeholder="예: 7 (시간)"
        value={sleepHours}
        onChange={(value) =>
          setSleepHours(value === "" ? "" : Number(value))
        }
      />

      {/* 스트레스 */}
      <div>
        <p className="text-sm mb-2">스트레스 수준</p>
        <InputRadio
          options={[
            { label: "낮음", value: "low" },
            { label: "보통", value: "medium" },
            { label: "높음", value: "high" },
          ]}
          value={stressLevel}
          onChange={(val) =>
            setStressLevel(val as "low" | "medium" | "high")
          }
        />
      </div>

      {/* CTA */}
      <CtaButton
        label="다음"
        onClick={onNext}
        bgColor="bg-green-500"
        textColor="text-white"
        disabled={
          activityLevel === "" ||
          exerciseFreq === "" ||
          sleepHours === "" ||
          stressLevel === ""
        }
      />
    </div>
  );
};

export default LifeStyleHabitsPage;