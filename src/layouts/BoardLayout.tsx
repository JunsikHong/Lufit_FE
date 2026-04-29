import BoardHeader from "@/pages/common/layout/BoardHeader";
import { Outlet } from "react-router-dom";

const BoardLayout = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-full max-w-[750px]">
        <BoardHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BoardLayout;