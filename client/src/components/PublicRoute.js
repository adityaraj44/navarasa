import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ children, ...routeProps }) => {
  if (localStorage.getItem("navarasa-auth-token")) {
    return <Redirect exact to="/adinova/admin/entries" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
