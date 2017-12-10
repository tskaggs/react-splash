import React, { Component } from 'react';

import './style.css';

class About extends Component {
  render() {
    return (
      <div className="About">
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