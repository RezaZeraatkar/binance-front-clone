import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Routes from './Routes/routes';

// Global Styles
import { GlobalStyles } from './GlobalStyles/GlobalStyles';

// ******************* import Theme Here ***************************

// Routing Must be implemented Here
class DesktopApp extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <GlobalStyles />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default DesktopApp;
