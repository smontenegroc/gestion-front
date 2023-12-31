import { Navigate, Outlet } from "react-router-dom";

export const  ProtectedRoute = ({isAllowed, children, redirectTo = '/login'}) => {

    if(!isAllowed){
        return <Navigate to={'/login'} />
    }
    return children ? children : <Outlet />
}