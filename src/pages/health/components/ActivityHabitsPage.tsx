import { useState } from "react";
import InputRadio from "@/pages/common/ui/InputRadio";
import InputNumber from "@/pages/common/ui/InputNumber";
import CtaButton from "@/pages/common/ui/CtaButton";

const ActivityHabitsPage = ({ onNext }: { onNext: () => void }) => {
  const [goal, setGoal] = useState<
    "lose" | "maintain" | "gain" | ""
  >("");
  const [activityType, setActivityType] = useState<
    "cardio" | "strength" | "mixed" | ""
  >("");
  const [exerciseTime, setExerciseTime] = useState<number | "">("");
  const [intensity, setIntensity] = useState<
    "low" | "medium" | "high" | ""
  >("");

  return (
    <div className="px-6 py-8 flex flex-col gap-4">
      {/* 운동 목표 */}
      <div>
        <p className="text-sm mb-2">운동 목표</p>
        <InputRadio
          options={[
            { label: "체중 감량", value: "lose" },
            { label: "유지", value: "maintain" },
            { label: "근육 증가", value: "gain" },
          ]}
          value={goal}
          onChange={(val) =>
            setGoal(val as "lose" | "maintain" | "gain")
          }
        />
      </div>

      {/* 운동 유형 */}
      <div>
        <p className="text-sm mb-2">선호 운동</p>
        <InputRadio
          options={[
            { label: "유산소", value: "cardio" },
            { label: "근력", value: "strength" },
            { label: "혼합", value: "mixed" },
          ]}
          value={activityType}
          onChange={(val) =>
            setActivityType(val as "cardio" | "strength" | "mixed")
          }
        />
      </div>

      {/* 운동 시간 */}
      <InputNumber
        label="운동 시간"
        placeholder="예: 30 (분)"
        value={exerciseTime}
        onChange={(value) =>
          setExerciseTime(value === "" ? "" : Number(value))
        }
      />

      {/* 운동 강도 */}
      <div>
        <p className="text-sm mb-2">운동 강도</p>
        <InputRadio
          options={[
            { label: "약하게", value: "low" },
            { label: "보통", value: "medium" },
            { label: "강하게", value: "high" },
          ]}
          value={intensity}
          onChange={(val) =>
            setIntensity(val as "low" | "medium" | "high")
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
          goal === "" ||
          activityType === "" ||
          exerciseTime === "" ||
          intensity === ""
        }
      />
    </div>
  );
};

export default ActivityHabitsPage;