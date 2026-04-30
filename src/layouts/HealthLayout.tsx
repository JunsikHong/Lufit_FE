import HealthHeader from "@/pages/common/layout/HealthHeader";
import HealthFooter from "@/pages/common/layout/HealthFooter";
import { Outlet } from "react-router-dom";

const HealthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-full max-w-[750px]">
        <HealthHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HealthLayout;