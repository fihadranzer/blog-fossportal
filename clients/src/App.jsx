import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./dashboards/layout/MainLayout";
import AdminIndex from "./dashboards/pages/AdminIndex";
import Login from "./dashboards/pages/Login";
import ProtectDashboard from "./middleware/ProtectDashboard";
import ProtectRules from "./middleware/ProtectRules";
import Unable from "./dashboards/pages/Unable";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/*" element={<ProtectDashboard />}>
          {/* Child routes will be rendered here */}
          {/* <Route index element={<Navigate to="admin" />} />
          <Route path="admin" element={<AdminIndex />} /> */}

          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Navigate to="/dashboard/admin" />} />

            <Route path="unable-access" element={<Unable />} />
            <Route path="" element={<ProtectRules role="admin" />}>
              <Route path="admin" element={<AdminIndex />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
