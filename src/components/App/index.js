import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Header from './Header'
import Main from './Main'

class App extends Component {
  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('App', className)} {...props}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;