import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./dashboards/layout/MainLayout";
import AdminIndex from "./dashboards/pages/AdminIndex";
import Login from "./dashboards/pages/Login";
import ProtectDashboard from "./middleware/ProtectDashboard";
import ProtectRules from "./middleware/ProtectRules";
import Unable from "./dashboards/pages/Unable";
import AddWriter from "./dashboards/pages/AddWriter";
import Writers from "./dashboards/pages/Writers";
import News from "./dashboards/pages/News";
import Profile from "./dashboards/pages/Profile";
import WriterIndex from "./dashboards/pages/WriterIndex";
import CreateNews from "./dashboards/pages/CreateNews";

const App = () => {
  const userInfo = { role: "writer" };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/*" element={<ProtectDashboard />}>
          {/* Child routes will be rendered here */}
          {/* <Route index element={<Navigate to="admin" />} />
          <Route path="admin" element={<AdminIndex />} /> */}

          <Route path="" element={<MainLayout />}>
            <Route
              path=""
              element={
                userInfo.role === "admin" ? (
                  <Navigate to="/dashboard/admin" />
                ) : (
                  <Navigate to="/dashboard/writer" />
                )
              }
            />
            <Route path="unable-access" element={<Unable />} />
            <Route path="news" element={<News />} />
            <Route path="profile" element={<Profile />} />

            <Route path="" element={<ProtectRules role="admin" />}>
              <Route path="admin" element={<AdminIndex />} />
              <Route path="writer/add" element={<AddWriter />} />
              <Route path="writers" element={<Writers />} />
            </Route>

            <Route path="" element={<ProtectRules role="writer" />}>
              <Route path="writer" element={<WriterIndex />} />
              <Route path="news/create" element={<CreateNews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
