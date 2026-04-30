import { useState } from "react";
import IntroPage from "@/pages/health/components/IntroPage";
import BodyMetricsPage from "@/pages/health/components/BodyMetricsPage";
import LifeStyleHabitsPage from "@/pages/health/components/LifeStyleHabitsPage";
import DietaryHabitsPage from "@/pages/health/components/DietaryHabitsPage";
import ActivityHabitsPage from "@/pages/health/components/ActivityHabitsPage";
import SleepHabitsPage from "@/pages/health/components/SleepHabitsPage";
import ResultPage from "@/pages/health/components/ResultPage";
import HealthFooter from "@/pages/common/layout/HealthFooter";

const HealthPage = () => {
  const [step, setStep] = useState("intro");

  return (
    <div>
      {step === "intro" && (
        <IntroPage onStart={() => setStep("body")} />
      )}
      {step === "body" && (
        <BodyMetricsPage onNext={() => setStep("lifestyle")} />
      )}
      {step === "lifestyle" && (
        <LifeStyleHabitsPage onNext={() => setStep("dietary")} />
      )}
      {step === "dietary" && (
        <DietaryHabitsPage onNext={() => setStep("activity")} />
      )}
      {step === "activity" && (
        <ActivityHabitsPage onNext={() => setStep("sleep")} />
      )}
      {step === "sleep" && (
        <SleepHabitsPage onNext={() => setStep("result")} />
      )}
      {step === "result" && (
        <ResultPage />
      )}
      {step !== "intro" && (
        <HealthFooter step={step} onChangeStep={setStep} />
      )}
    </div>
  );
};

export default HealthPage;