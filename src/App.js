import React, { Component } from 'react';
import './App.css';

import Navbar from 'components/Navigation/Navbar/Navbar';
import Home from 'containers/Home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home}/>
          <Route path='/messages' render={() => {
            return <h1>Messages</h1>
          }}/>
          <Redirect to="/home"/>
        </Switch>
      </div>
    );
  }
}

export default App;
