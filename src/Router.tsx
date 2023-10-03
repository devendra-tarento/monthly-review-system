import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { RouteConstants } from "./constants";

const Login = React.lazy(() =>
  import("./pages/index").then(({ LoginPage }) => ({
    default: LoginPage,
  }))
);

const ManagerDashboard = React.lazy(() =>
  import("./pages/index").then(({ ManagerDashboardPage }) => ({
    default: ManagerDashboardPage,
  }))
);

const MainDashboard = React.lazy(() =>
  import("./pages/index").then(({ MainDashboardPage }) => ({
    default: MainDashboardPage,
  }))
);


const TestingPage = React.lazy(() =>
  import("./pages/index").then(({ TestingPage }) => ({
    default: TestingPage,
  }))
);

const Router = () => {
  return (
    <Suspense fallback={<div className=""></div>}>
      <BrowserRouter>
        <Routes>
          <Route path={RouteConstants.root} element={<Login />} />
          <Route path={RouteConstants.login} element={<Login />} />
          <Route path={RouteConstants.managerdashboard} element={<ManagerDashboard />} />
          <Route path={RouteConstants.maindashboard} element={<MainDashboard />} />
          <Route path={RouteConstants.testingpage} element={<TestingPage />} />

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

interface ProtectedRouteProps {
  auth: any;
  redirectPath?: string;
  children?: any;
}

const ProtectedRoute = ({
  auth,
  redirectPath = RouteConstants.root,
  children,
}: ProtectedRouteProps) => {
  if (!Object.keys(auth).length) {
    return <Navigate to={redirectPath} />;
  }

  return children ? children : <Outlet />;
};

export default Router;
