import { useState } from "react";
import Header from "@/pages/common/Header";
import Footer from "@/pages/common/Footer";
import MenuPage from "@/pages/menu/page";
import NotificationPage from "@/pages/notification/page";
import { Outlet } from "react-router-dom";

type View = "home" | "menu" | "notification";

const DefaultLayout = () => {
  const [view, setView] = useState<View>("home");

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
          {view === "menu" && <MenuPage />}
          {view === "notification" && <NotificationPage />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;