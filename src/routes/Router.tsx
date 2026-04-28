import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "@/routes/AdminRouter";
import PrivateRoute from "@/routes/PrivateRouter";
import PublicRoute from "@/routes/PublicRouter";
import DefaultLayout from "@/pages/layouts/DefaultLayout";
import SimpleLayout from "@/pages/layouts/SimpleLayout";
import Home from "@/pages/home/page";
import PolicyPage from "@/pages/policy/page";
import CommunityListPage from "@/pages/board/community/list/page";
import CommunityDetailPage from "@/pages/board/community/detail/page";
import CommunityWritePage from "@/pages/board/community/write/page";
import FaqListPage from "@/pages/board/faq/list/page";
import FaqDetailPage from "@/pages/board/faq/detail/page";
import FaqWritePage from "@/pages/board/faq/write/page";
import NoticeListPage from "@/pages/board/notice/list/page";
import NoticeDetailPage from "@/pages/board/notice/detail/page";
import NoticeWritePage from "@/pages/board/notice/write/page";
import HealthPage from "@/pages/health/page";
import RoutinePage from "@/pages/routine/page";
import NotificationPage from "@/pages/notification/page";
import LoginPage from "@/pages/user/login/page";
import JoinPage from "@/pages/user/join/page";
import ForgetPage from "@/pages/user/forget/page";

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
    path: "/policy/:type",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <PolicyPage />,
      },
    ],
  },
  {
    path: "/community",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <CommunityListPage />,
      },
    ],
  },
  {
    path: "/community/:id",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <CommunityDetailPage />,
      },
    ],
  },
  {
    path: "/faq",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <FaqListPage />,
      },
    ],
  },
  {
    path: "/faq/:id",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <FaqDetailPage />,
      },
    ],
  },
  {
    path: "/notice",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <NoticeListPage />,
      },
    ],
  },
  {
    path: "/notice/:id",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <NoticeDetailPage />,
      },
    ],
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <SimpleLayout />,
        children: [{ index: true, element: <LoginPage /> }],
      },
      {
        path: "/join",
        element: <SimpleLayout />,
        children: [{ index: true, element: <JoinPage /> }],
      },
      {
        path: "/forget",
        element: <SimpleLayout />,
        children: [{ index: true, element: <ForgetPage /> }],
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "/notification/:type",
        element: <DefaultLayout />,
        children: [{ index: true, element: <NotificationPage /> }],
      },
      {
        path: "/routine",
        element: <DefaultLayout />,
        children: [{ index: true, element: <RoutinePage /> }],
      },
      {
        path: "/health",
        element: <SimpleLayout />,
        children: [{ index: true, element: <HealthPage /> }],
      },
      {
        path: "/community/write",
        element: <DefaultLayout />,
        children: [{ index: true, element: <CommunityWritePage /> }],
      },
    ],
  },
  {
    element: <AdminRoute />,
    children: [
      {
        path: "/faq/write",
        element: <DefaultLayout />,
        children: [{ index: true, element: <FaqWritePage /> }],
      },
      {
        path: "/notice/write",
        element: <DefaultLayout />,
        children: [{ index: true, element: <NoticeWritePage /> }],
      },
    ],
  },
]);