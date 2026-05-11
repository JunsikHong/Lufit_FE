import { useLocation } from "react-router-dom";
import IntroPage from "@/pages/routine/components/IntroPage";
import CalendarPage from "@/pages/routine/components/CalendarPage";

const RoutinePage = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/routine" && <IntroPage />}
      {location.pathname === "/routine/calendar" && <CalendarPage />}
    </div>
  );
};

export default RoutinePage;