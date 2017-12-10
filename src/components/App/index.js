import React, { Component } from 'react';
import { Layout } from 'element-react';

import Header from './Header'
import Main from './Main'

import 'element-theme-default';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Layout.Row className="tac">
      		<Layout.Col span={24}>
        		<Header />
        	</Layout.Col>
        	<Layout.Col span={24}>
        		<Main />
        	</Layout.Col>
       	</Layout.Row>
      </div>
    );
  }
}

export default App;