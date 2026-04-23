import { useState } from "react";
import IntroPage from "@/pages/health/components/IntroPage";
import BodyMetricsPage from "@/pages/health/components/BodyMetricsPage";

const HealthPage = () => {
  const [step, setStep] = useState<"intro" | "body">("intro");

  return (
    <div>
      {step === "intro" && (
        <IntroPage onStart={() => setStep("body")} />
      )}

      {step === "body" && (
        <BodyMetricsPage />
      )}
    </div>
  );
};

export default HealthPage;