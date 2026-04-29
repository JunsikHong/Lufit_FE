import SimpleHeader from "@/pages/common/layout/SimpleHeader";
import { Outlet } from "react-router-dom";

const SimpleLayout = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-full max-w-[750px]">
        <SimpleHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SimpleLayout;