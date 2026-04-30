import { useState } from "react";
import DefaultHeader from "@/pages/common/layout/DefaultHeader";
import DefaultFooter from "@/pages/common/layout/DefaultFooter";
import MenuPage from "@/pages/common/menu/page";
import NotificationListPage from "@/pages/common/notification/list/page";
import { Outlet } from "react-router-dom";
import RightDrawer from "@/pages/common/overlay/RightDrawer";

type View = "home" | "menu" | "notification";

const DefaultLayout = () => {
  const [view, setView] = useState<View>("home");
  const closeDrawer = () => setView("home");

  return (
    <div className="layout flex flex-col min-h-screen items-center">
      <div className="w-full max-w-[750px] relative">
        <DefaultHeader
          view={view}
          onMenuOpen={() => setView("menu")}
          onMenuClose={() => setView("home")}
          onNotificationOpen={() => setView("notification")}
          onNotificationClose={() => setView("home")}
        />
        <main className="relative">
          <div>
            <Outlet />
          </div>
        </main>
        <DefaultFooter />
        <RightDrawer open={view === "menu"} onClose={closeDrawer}>
          <MenuPage />
        </RightDrawer>
        <RightDrawer open={view === "notification"} onClose={closeDrawer}>
          <NotificationListPage />
        </RightDrawer>
      </div>
    </div>
  );
};

export default DefaultLayout;