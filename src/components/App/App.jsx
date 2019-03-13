import React from 'react';
import Helmet from 'react-helmet';

import { withAuthentication } from '../Session/Session';

import Routes from '../Routes/Routes';
import Site from './Site';
import Header from '../Header/Header';
import Content from './Content';
import { info } from '../../assets/constants';

function App() {
  const { name, tagline } = info;
  return (
    <Site>
      <Helmet
        title={name}
        meta={[
          {
            name: 'description',
            content: { tagline },
          },
          {
            name: 'keywords',
            content:
              'machine, learning, data, science, computers, computing, computer, science, high, school, game, tutorial',
          },
        ]}
      />
      <Header />
      <Content>
        <Routes />
      </Content>
    </Site>
  );
}

App.propTypes = {};

export default withAuthentication(App);
