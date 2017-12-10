import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.css';

class NotFound extends Component {
  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('NotFound', className)} {...props}>
        <header className="NotFound-header">
          <h1 className="NotFound-title">Welcome</h1>
        </header>
        <p className="NotFound-intro">
          To get started, edit <code>src/NotFound.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default NotFound;