import { useAuth } from "../contexts/Auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = () => {
  let { token } = useAuth();
  let location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  
  return <Outlet />;
};
