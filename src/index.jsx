import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from 'react-notify-toast';

import App from './components/App/App';
import Firebase, { FirebaseContext } from './Auth/Firebase';
import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(
  <Router>
    <FirebaseContext.Provider value={new Firebase()}>
      <Notifications />
      <App />
    </FirebaseContext.Provider>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
