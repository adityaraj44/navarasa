import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...routeProps }) => {
  if (!localStorage.getItem("navarasa-auth-token")) {
    return <Redirect exact to="/adinova/admin/login" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
