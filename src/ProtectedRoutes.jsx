import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const { userInfo } = useSelector((state) => state.userLogin);
  return userInfo?.token ? <Outlet /> : <Navigate to={"/login"} />
}

export const AdminProtectedRoute = () => {
    const { userInfo } = useSelector((state) => state.userLogin);
    return userInfo?.token ?
        userInfo?.user?.isAdmin ?
            (
                <Outlet />
            ) :
            (
                <Navigate to="/*" />
            ) :
        (
            <Navigate to={"/login"} />
        )
}

