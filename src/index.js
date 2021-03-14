import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

// configured Auth0 to provide basic authentication
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_URL}
    redirectUri={process.env.REACT_APP_REDIRECT_URI}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
