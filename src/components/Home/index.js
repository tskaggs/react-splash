import React, { Component } from 'react';
import { Layout, Card, Button } from 'element-react';

import reactLogo from '../../assets/images/logo.svg';
import elementReactLogo from '../../assets/images/element-react.svg';
import reactRouterLogo from '../../assets/images/react-router.png';

class Index extends Component {
  render() {
    return (
      <div className="Home">
        <Layout.Row gutter="20">
          <Layout.Col xs="24" sm="24" md="24" lg="24">
            <h2>Built with love and cool stuff.</h2>
          </Layout.Col>
          <Layout.Col xs="24" sm="24" md="8" lg="8">
            <Card bodyStyle={{ padding: 0 }}>
              <img src={reactLogo} className="image react-image" alt="React"/>
              <div style={{ padding: 14 }}>
                <span>React</span>
                <div className="bottom clearfix">
                  <p>We utilize the React library!</p>
                  <Button type="text" className="button">React</Button>
                </div>
              </div>
            </Card>
          </Layout.Col>
          <Layout.Col xs="24" sm="24" md="8" lg="8">
            <Card bodyStyle={{ padding: 0 }}>
              <img src={elementReactLogo} className="image element-image" alt="Element UI for React"/>
              <div style={{ padding: 14 }}>
                <span>Element UI for React</span>
                <div className="bottom clearfix">
                  <p>Thanks to Element UI for the UI kit! Looks good.</p>
                  <Button type="text" className="button">Element for React</Button>
                </div>
              </div>
            </Card>
          </Layout.Col>
          <Layout.Col xs="24" sm="24" md="8" lg="8">
            <Card bodyStyle={{ padding: 0 }}>
              <img src={reactRouterLogo} className="image" alt="React Router"/>
              <div style={{ padding: 14 }}>
                <span>React Router</span>
                <div className="bottom clearfix">
                  <p>This react-router-dom is great for routing!</p>
                  <Button type="text" className="button" href="https://reactjs.org/" target="_blank">Operating button</Button>
                </div>
              </div>
            </Card>
          </Layout.Col>
        </Layout.Row>
      </div>
    );
  }
}

export default Index;