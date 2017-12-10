import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

class About extends Component {
  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('About', className)} {...props}>
        <header className="About-header">
          <h1 className="About-title">Welcome</h1>
        </header>
        <p className="About-intro">
          To get started, edit <code>src/About.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default About;