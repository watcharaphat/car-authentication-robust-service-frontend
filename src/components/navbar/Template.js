import React, { Fragment } from 'react';

export default function () {
  return (
    <Fragment>
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <h1 className="title is-4">{'CARS'}</h1>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>

      <section className="hero is-primary app-hero">
        <div className="hero-body ">
          <div className="container">
            <h1 className="title">
              {'Car Authentication Robust Service'}
            </h1>
            <h2 className="subtitle">
              {'Coffee Sunday Inc.'}
            </h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
};