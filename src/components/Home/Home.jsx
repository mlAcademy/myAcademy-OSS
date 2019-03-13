import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session/Session';

import { info } from '../../assets/constants';

import SignupWindow from '../SignupWindow/SignupWindow';
import Footer from './Footer/Footer';
import './Home.scss';

import logo from '../../assets/img/logos/text_white.png';

function Home() {
  const { features, tagline } = info;

  return (
    <AuthUserContext.Consumer>
      {authUser => (
        <div style={{ '-webkit-overflow-scrolling': 'touch' }}>
          <div className="splash-bg">
            <header>
              <div className="stripes">
                <span />
                <span />
                <span />
                <span />
              </div>
              <section className="splash-container full-height-bg ">
                <div className="logo-container has-text-centered">
                  <div style={{ maxWidth: '95vw' }}>
                    <img src={logo} alt="" className="animated-svg" style={{ width: '500px' }} />
                    <div className="tagline">
                      <h2 className="subtitle is-family-secondary">{tagline}</h2>
                    </div>
                  </div>
                </div>
                {!authUser && (
                  <div id="signup-window" className="animated-svg" style={{ width: '400px' }}>
                    <SignupWindow label="Get Started!" buttonStyle="primary" />
                  </div>
                )}
              </section>
            </header>
          </div>
          <br />
          <div className="description-container">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`${
                  index % 2 === 1 ? `group has-background-light` : `group-alternative`
                }`}
              >
                <section className="home-content">
                  <p className="title">{feature.title}</p>
                  <p>{feature.description}</p>
                </section>
                <aside className="home-aside">
                  <img className="image-wrapper" src={feature.image} alt="" />
                </aside>
              </div>
            ))}
            <div className="final-group primary-grad has-text-centered">
              <Link to={!authUser ? '/signup' : '/topics'} className="title has-text-white">
                Get Started Now!
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
}
export default Home;
