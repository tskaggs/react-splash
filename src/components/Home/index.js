import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class Index extends Component {
  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('Index', className)} {...props}>
        <header className="Index-header">
          <img src={logo} className="Index-logo" alt="logo" />
          <h1 className="Index-title">Welcome</h1>
        </header>
        <p className="Index-intro">
          To get started, edit <code>src/Index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Index;