import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;

