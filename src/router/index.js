import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import menu from "./menu";

const RouteIndex = () => {
  return (
    <BrowserRouter>
      <Switch>
        {menu.map(({ component, path }) => {
          return <Route key={path} component={component} path={path} exact />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default RouteIndex;
