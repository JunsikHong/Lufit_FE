import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/api/useUser";
import Loading from "@/pages/common/loading/Loading";

const PrivateRoute = () => {
    const { data: user, isLoading } = useUser();

    if (isLoading) return <Loading />;

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;