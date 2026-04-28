import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/api/useUser";
import Loading from "@/pages/common/loading/Loading";

const AdminRoute = () => {
    const { data: user, isLoading } = useUser();

    if (isLoading) return <Loading />;

    return user.id == 'admin' ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;