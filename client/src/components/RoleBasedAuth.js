import React from "react";
import { Route, Redirect } from "react-router-dom";

const RoleBasedAuth = ({ children, ...routeProps }) => {
  if (
    !localStorage.getItem("role") ||
    localStorage.getItem("role") !== "superadmin"
  ) {
    return <Redirect exact to="/adinova/admin/login" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default RoleBasedAuth;
