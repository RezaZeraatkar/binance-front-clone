import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Markets from '../Pages/Markets/markets';
import Home from '../Pages/Home/home';
import Exchange from '../Pages/Exchange/exchange';

export default function routes () {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/exchange' component={Exchange} />
      <Route exact path='/markets' component={Markets} />
    </Switch>
  );
}
