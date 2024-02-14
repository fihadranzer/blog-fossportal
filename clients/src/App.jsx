import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./dashboards/layout/MainLayout";
import AdminIndex from "./dashboards/pages/AdminIndex";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/*" element={<MainLayout />}>
          {/* Child routes will be rendered here */}
          {/* <Route index element={<Navigate to="admin" />} />
          <Route path="admin" element={<AdminIndex />} /> */}

          <Route path="" element={<Navigate to="/dashboard/admin" />}>
            <Route path="admin" element={<AdminIndex />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
