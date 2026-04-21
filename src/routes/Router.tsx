import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "@/pages/layouts/DefaultLayout";
import Home from "@/pages/home/page";

export const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />,
            },
        ],
    },
]);