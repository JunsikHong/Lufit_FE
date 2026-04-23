import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/pages/layouts/DefaultLayout";
import SimpleLayout from "@/pages/layouts/SimpleLayout";
import Home from "@/pages/home/page";
import HealthPage from "@/pages/health/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/health",
    element: <SimpleLayout />,
    children: [
      {
        index: true,
        element: <HealthPage />,
      },
    ],
  },
]);