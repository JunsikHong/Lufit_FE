import { useState } from "react";
import InputRadio from "@/pages/common/ui/InputRadio";
import InputCheck from "@/pages/common/ui/InputCheck";
import InputString from "@/pages/common/ui/InputString";
import CtaButton from "@/pages/common/ui/CtaButton";

const DietaryHabitsPage = ({ onNext }: { onNext: () => void }) => {
  const [mealCount, setMealCount] = useState<"2" | "3" | "4+" | "">("");
  const [eatOutFreq, setEatOutFreq] = useState<
    "rare" | "sometimes" | "often" | ""
  >("");

  const [preferences, setPreferences] = useState<string[]>([]);
  const [etc, setEtc] = useState("");

  const togglePreference = (value: string, checked: boolean) => {
    if (checked) {
      setPreferences((prev) => [...prev, value]);
    } else {
      setPreferences((prev) => prev.filter((v) => v !== value));
    }
  };

  return (
    <div className="px-6 py-8 flex flex-col gap-4">
      {/* 식사 횟수 */}
      <div>
        <p className="text-sm mb-2">하루 식사 횟수</p>
        <InputRadio
          options={[
            { label: "2끼", value: "2" },
            { label: "3끼", value: "3" },
            { label: "4끼 이상", value: "4+" },
          ]}
          value={mealCount}
          onChange={(val) => setMealCount(val as "2" | "3" | "4+")}
        />
      </div>

      {/* 외식 빈도 */}
      <div>
        <p className="text-sm mb-2">외식 빈도</p>
        <InputRadio
          options={[
            { label: "거의 안함", value: "rare" },
            { label: "가끔", value: "sometimes" },
            { label: "자주", value: "often" },
          ]}
          value={eatOutFreq}
          onChange={(val) =>
            setEatOutFreq(val as "rare" | "sometimes" | "often")
          }
        />
      </div>

      {/* 음식 선호 (복수 선택) */}
      <div>
        <p className="text-sm mb-2">선호 음식 (복수 선택)</p>
        <div className="flex flex-col gap-2">
          <InputCheck
            label="고단백 (닭가슴살, 계란 등)"
            checked={preferences.includes("protein")}
            onChange={(checked) => togglePreference("protein", checked)}
          />
          <InputCheck
            label="탄수화물 위주"
            checked={preferences.includes("carb")}
            onChange={(checked) => togglePreference("carb", checked)}
          />
          <InputCheck
            label="지방/패스트푸드"
            checked={preferences.includes("fat")}
            onChange={(checked) => togglePreference("fat", checked)}
          />
          <InputCheck
            label="채식/건강식"
            checked={preferences.includes("healthy")}
            onChange={(checked) => togglePreference("healthy", checked)}
          />
        </div>
      </div>

      {/* 기타 */}
      <div>
        <p className="text-sm mb-2">기타 (알레르기, 특이사항 등)</p>
        <InputString
          value={etc}
          onChange={setEtc}
          placeholder="예: 유제품 알레르기, 저탄고지 식단 등"
        />
      </div>

      {/* 다음 버튼 */}
      <CtaButton
        label="다음"
        onClick={onNext}
        bgColor="bg-green-500"
        textColor="text-white"
        disabled={mealCount === "" || eatOutFreq === ""}
      />
    </div>
  );
};

export default DietaryHabitsPage;