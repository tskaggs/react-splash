import React, { Component } from 'react';
import { Layout, Card, Button } from 'element-react';
import CreateClass from 'create-react-class';
import phone from '../../assets/images/phone.png';

var LayoutColumn = CreateClass({
  getInitialState: function() {
    return { items: [] }
  },
  render: function() {
    return (
      <div>
        { 
          this.props.data.map(function(item, i) {
            return <Layout.Col xs="24" sm="24" md="8" lg="8" key={i}>
                      <Card bodyStyle={{ padding: 0 }} className="card-element">
                        <img src={item.image} className="image" alt="Element UI for React"/>
                        <div style={{ padding: 14 }}>
                          <span>{item.name}</span>
                          <div className="bottom clearfix">
                            <p>{item.blurb}</p>
                            <Button type="primary" className="button" href={item.src} target="_blank">{item.button}</Button>
                          </div>
                        </div>
                      </Card>
                    </Layout.Col>
          })
        }
      </div>);
  }
});

var data =  [
  {
    name: 'React',
    blurb: 'We utilize the React library!',
    button: 'React',
    src: 'https://reactjs.org/',
    image: require('../../assets/images/logo.svg')
  },
  {
    name: 'Element UI for React',
    blurb: 'Thanks to Element UI for the UI kit! Looks good.',
    button: 'Element for React',
    src: 'https://eleme.github.io/element-react/#/en-US/quick-start',
    image: require('../../assets/images/element-react.svg')
  },
  {
    name: 'React Router',
    blurb: 'This react-router-dom is great for routing!',
    button: 'React Router',
    src: 'https://reactjs.org/',
    image: require('../../assets/images/react-router.png')
  }
];

class Index extends Component {
  render() {
    return (
      <div className="Home">
        <Layout.Row gutter="20">
          <Layout.Col xs="24" sm="24" md="24" lg="24" className="Home-header">
            <h1>Built with love and cool stuff.</h1>
            <img src={phone} className="" alt="Element UI for React"/>
            <p>A cool react layout for splash pages and things!</p>
            <p>Built in less than 10 hours</p>
            <Button type="primary" size="large">Action!</Button>
          </Layout.Col>
          <LayoutColumn data={ data }  />
        </Layout.Row>
      </div>
    );
  }
}

export default Index;