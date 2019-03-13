import React from 'react';
import { partners } from '../../../assets/constants';

function Footer() {
  const { partner1, partner2, docs } = partners;

  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered ">
            <a href={partner1.url}>
              <img
                src={partner1.image}
                alt={partner1.url}
                style={{
                  height: '40px'
                }}
                className="animated-svg"
              />
            </a>
          </div>
          <div className="column has-text-centered" />
          <div className="column has-text-centered">
            <a href={docs.url} className="button is-primary is-outlined">
              How did we make it?
            </a>
          </div>
          <div className="column has-text-centered" />
          <div className="column has-text-centered ">
            <a href={partner2.url}>
              <img
                src={partner2.image}
                alt={partner2.url}
                style={{
                  height: '40px'
                }}
                className="animated-svg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
