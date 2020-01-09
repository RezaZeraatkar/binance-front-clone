import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Layout from './HOC/Layout/Layout';

// Pages
import Exchange from './Pages/Exchange/exchange';
import Home from './Pages/Home/home';
import Markets from './Pages/Markets/markets';
import Language from './Pages/Language/language';
import Support from './Pages/Support/support';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register';

// ******************* import Theme Here ***************************

// Routing Must be implemented Here
class MobileApp extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/markets' component={Markets} />
              <Route exact path='/exchange' component={Exchange} />
              <Route exact path='/support' component={Support} />
              <Route exact path='/language' component={Language} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default MobileApp;
