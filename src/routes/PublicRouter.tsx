import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/api/useUser";
import Loading from "@/pages/common/loading/Loading";

const PublicRoute = () => {
    const { data: user, isLoading } = useUser();

    if (isLoading) return <Loading />;

    return !user ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute;