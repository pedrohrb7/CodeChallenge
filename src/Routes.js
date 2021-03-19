import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Location from "./pages/Location";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/profile/locationForm">
        <Location />
      </Route>

      <Route exact path="/profile/profileForm">
        <Profile />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
