import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Layout from './HOCs/Layout/Layout';
import Routes from './Routes/routes';

// import Markets from './Pages/Markets/markets';
// import Language from './Pages/Language/language';
// import Support from './Pages/Support/support';
// import Login from './Pages/Login/login';
// import Register from './Pages/Register/register';

// ******************* import Theme Here ***************************

// Routing Must be implemented Here
class DesktopApp extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default DesktopApp;
