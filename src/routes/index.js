import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Task from "../views/Task";
import Pagina404 from "../views/404";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/task" component={Task} exact />

        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  );
}
