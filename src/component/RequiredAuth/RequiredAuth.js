import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const RequiredAuth = ( { children} ) => {
    const { user } = useAuth();
    return user.email ? children : <Navigate to = "/login"></Navigate>;
};

export default RequiredAuth;