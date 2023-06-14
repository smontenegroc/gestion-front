import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"

export const  ProtectedRoute = ({children, redirectTo = '/login'}) => {

    const token = useSelector((state) => state.token.token);
    const roleId = useSelector((state) => state.token.roleId);

    if(!token){
        return <Navigate to={'/login'} />
    }
    return children ? children : <Outlet />
}