import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import DesktopLayout from '../HOCs/DesktopLayout/DesktopLayout';
import ExchangeLayout from '../HOCs/ExchangeLayout/ExchangeLayout';
import Home from '../Pages/Home/Home';
import Markets from '../Pages/Markets/Markets';
import Exchange from '../Pages/Exchange/Exchange';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

export default function routes() {
  return (
    <Switch>
      <Route exact path="/">
        <DesktopLayout>
          <Home />
        </DesktopLayout>
      </Route>
      <Route exact path="/markets">
        <DesktopLayout>
          <Markets />
        </DesktopLayout>
      </Route>
      <Route exact path="/login">
        <DesktopLayout>
          <Login />
        </DesktopLayout>
      </Route>
      <Route exact path="/register">
        <DesktopLayout>
          <Register />
        </DesktopLayout>
      </Route>
      <Route path="/exchange">
        <ExchangeLayout>
          <Exchange />
        </ExchangeLayout>
      </Route>
    </Switch>
  );
}
