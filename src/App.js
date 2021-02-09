import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>

    );
  }
}

export default App;

