import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Topics from '../Topics/Topics';
import Labs from '../Labs/Labs';
import SplashContainer from './SplashContainer';
import NotFound from './NotFound';

const LabLoader = ({ match: { params } }) => {
  const { id } = params;
  return <Labs id={id} />;
};
LabLoader.propTypes = {
  match: PropTypes.object.isRequired,
};

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/topics" component={Topics} />
    <Route path="/labs/:id" render={props => <LabLoader {...props} />} />
    <Route path="/signup" component={() => <SplashContainer type="signup" />} />
    <Route path="/login" component={() => <SplashContainer type="login" />} />
    <Route path="/forgot" component={() => <SplashContainer type="forgot" />} />
    <Route path="/reset" component={() => <SplashContainer type="reset" />} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
