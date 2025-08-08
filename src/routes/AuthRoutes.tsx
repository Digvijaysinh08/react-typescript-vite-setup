import { Route, Routes } from "react-router-dom";
import Login from "@pages/auth/Login";
import { apiRoutes } from "@constants/apiRoutes";
import Register from "@pages/auth/Register";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={apiRoutes.auth.login} element={<Login />} />
      <Route path={apiRoutes.auth.register} element={<Register />} />
    </Routes>
  );
};
