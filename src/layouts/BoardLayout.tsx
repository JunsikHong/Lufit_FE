import BoardHeader from "@/pages/common/layout/BoardHeader";
import BoardFooter from "@/pages/common/layout/BoardFooter";
import { Outlet, useLocation } from "react-router-dom";

const BoardLayout = () => {
  const location = useLocation();

  const isDetailPage = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    return pathSegments.length === 2 && /^\d+$/.test(pathSegments[1]);
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="w-full max-w-[750px]">
        <BoardHeader />
        <main>
          <Outlet />
        </main>
        {isDetailPage() && <BoardFooter />}
      </div>
    </div>
  );
};

export default BoardLayout;