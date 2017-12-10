import React, { Component } from 'react';
import { Layout } from 'element-react';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Layout.Row gutter="20">
          <Layout.Col xs="24" sm="24" md="24" lg="24" className="Home-header">
            <h1>What's this about?</h1>
            <p>Built in less than 10 hours</p>
            <p>Drank a lot of maté</p>
            <p>Just wanted to make a cool react starter</p>
            <p>Used <a href="https://www.sketchappsources.com/free-source/2007-mobile-icon-set-sketch-freebie-resource.html">Mobile Icon Set Sketch Resource</a></p>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}

export default About;