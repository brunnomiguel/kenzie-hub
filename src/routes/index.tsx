import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Register } from "../pages/Register";
import { SignIn } from "../pages/SignIn";
import { ProtectedRoute } from "./protectedRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/cadastro" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
