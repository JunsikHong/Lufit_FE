import { useState } from "react";
import Header from "@/pages/common/layout/Header";
import Footer from "@/pages/common/layout/Footer";
import MenuPage from "@/pages/common/menu/page";
import NotificationPage from "@/pages/common/notification/page";
import { Outlet } from "react-router-dom";
import RightDrawer from "@/pages/common/overlay/RightDrawer";

type View = "home" | "menu" | "notification";

const DefaultLayout = () => {
  const [view, setView] = useState<View>("home");
  const closeDrawer = () => setView("home");

  return (
    <div className="layout flex flex-col min-h-screen items-center">
      <div className="w-full max-w-[750px] relative">
        <Header
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
        <Footer />
        <RightDrawer open={view === "menu"} onClose={closeDrawer}>
          <MenuPage />
        </RightDrawer>
        <RightDrawer open={view === "notification"} onClose={closeDrawer}>
          <NotificationPage />
        </RightDrawer>
      </div>
    </div>
  );
};

export default DefaultLayout;