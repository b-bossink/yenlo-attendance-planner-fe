import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import MainNavigation from "./components/layout/MainNavigation";
import TitleBar from "./components/layout/TitleBar";

import AskForLeavePage from "./components/pages/AskForLeave";
import CallInSickPage from "./components/pages/CallInSick";
import TeamPlannerPage from "./components/pages/TeamPlanner";
import UserPlannerPage from "./components/pages/UserPlanner";
import SingleManagmentPage from "./components/pages/singleManagment";
import TeamManagmentPage from "./components/pages/teamManagment";
import CreateUserPage from "./components/pages/CreateUser";
import LoginPage from "./components/pages/Login";
import UserContext from "./store/logged-in-context";

import "./App.css";

function App() {
  const userCtx = useContext(UserContext);

  const PrivateAdminLoggedInRoute = ({ children }) => {
    return userCtx.user.isManager && userCtx.isLoggedIn ? (
      children
    ) : (
      <Navigate
        to="/user-planner"
        state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
      />
    );
  };

  const PrivateRoute = ({ children }) => {
    return userCtx.isLoggedIn ? children : <Navigate to="/" />;
  };

  const PrivateRouteLoggedIn = ({ children }) => {
    return userCtx.isLoggedIn ? (
      <Navigate
        to="/user-planner"
        state={{ user: { id: userCtx.user.id, name: userCtx.user.name } }}
      />
    ) : (
      children
    );
  };

  const getCookieValue = (name) =>
    document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || "";

  useEffect(() => {
    let token = getCookieValue("token");
    userCtx.getUser(token.replace("token=", ""));
  }, []);

  if (userCtx.authenticationCheck) {
    return (
      <section>
        <h1>Authenticating...</h1>
      </section>
    );
  }

  return (
    <div className="App">
      <TitleBar />
      <MainNavigation />

      <Routes>
        <Route
          path="/ask-for-leave"
          element={
            <PrivateRoute>
              {" "}
              <AskForLeavePage />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/call-in-sick"
          element={
            <PrivateRoute>
              {" "}
              <CallInSickPage />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/team-planner"
          element={
            <PrivateRoute>
              {" "}
              <TeamPlannerPage />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/user-planner"
          element={
            <PrivateRoute>
              {" "}
              <UserPlannerPage editMode={false} />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/user-planner/edit"
          element={
            <PrivateRoute>
              {" "}
              <UserPlannerPage editMode={true} />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/single-manage"
          element={
            <PrivateAdminLoggedInRoute>
              {" "}
              <SingleManagmentPage />{" "}
            </PrivateAdminLoggedInRoute>
          }
        />
        <Route
          path="/team-manage"
          element={
            <PrivateAdminLoggedInRoute>
              {" "}
              <TeamManagmentPage />{" "}
            </PrivateAdminLoggedInRoute>
          }
        />
        <Route
          path="/create-user"
          element={
            <PrivateAdminLoggedInRoute>
              {" "}
              <CreateUserPage />{" "}
            </PrivateAdminLoggedInRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRouteLoggedIn>
              {" "}
              <LoginPage />{" "}
            </PrivateRouteLoggedIn>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
