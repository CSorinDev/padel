import { Route, Routes } from "react-router";
import Layout from "./features/layouts/Layout";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
