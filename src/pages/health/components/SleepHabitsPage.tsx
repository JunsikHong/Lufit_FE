import { useState } from "react";
import InputRadio from "@/pages/common/ui/InputRadio";
import InputNumber from "@/pages/common/ui/InputNumber";
import CtaButton from "@/pages/common/ui/CtaButton";

const SleepHabitsPage = ({ onNext }: { onNext: () => void }) => {
  const [sleepHours, setSleepHours] = useState<number | "">("");
  const [sleepPattern, setSleepPattern] = useState<
    "regular" | "irregular" | ""
  >("");
  const [sleepQuality, setSleepQuality] = useState<
    "poor" | "normal" | "good" | ""
  >("");
  const [fatigue, setFatigue] = useState<
    "low" | "medium" | "high" | ""
  >("");

  return (
    <div className="px-6 py-8 flex flex-col gap-4">
      {/* 수면 시간 */}
      <InputNumber
        label="평균 수면 시간"
        placeholder="예: 7 (시간)"
        value={sleepHours}
        onChange={(value) =>
          setSleepHours(value === "" ? "" : Number(value))
        }
      />

      {/* 수면 규칙성 */}
      <div>
        <p className="text-sm mb-2">수면 패턴</p>
        <InputRadio
          options={[
            { label: "규칙적", value: "regular" },
            { label: "불규칙", value: "irregular" },
          ]}
          value={sleepPattern}
          onChange={(val) =>
            setSleepPattern(val as "regular" | "irregular")
          }
        />
      </div>

      {/* 수면 질 */}
      <div>
        <p className="text-sm mb-2">수면의 질</p>
        <InputRadio
          options={[
            { label: "나쁨", value: "poor" },
            { label: "보통", value: "normal" },
            { label: "좋음", value: "good" },
          ]}
          value={sleepQuality}
          onChange={(val) =>
            setSleepQuality(val as "poor" | "normal" | "good")
          }
        />
      </div>

      {/* 피로도 */}
      <div>
        <p className="text-sm mb-2">기상 후 피로도</p>
        <InputRadio
          options={[
            { label: "없음", value: "low" },
            { label: "보통", value: "medium" },
            { label: "심함", value: "high" },
          ]}
          value={fatigue}
          onChange={(val) =>
            setFatigue(val as "low" | "medium" | "high")
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
          sleepHours === "" ||
          sleepPattern === "" ||
          sleepQuality === "" ||
          fatigue === ""
        }
      />
    </div>
  );
};

export default SleepHabitsPage;