import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Navbar from 'components/Navigation/Navbar/Navbar';
import Home from 'containers/Home/Home';
import LandingPage from 'containers/LandingPage/LandingPage';
import Signup from 'containers/Signup/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/notifications' render={() => {
            return <h1>Notifications</h1>
          }}/>
          <Route path='/messages' render={() => {
            return <h1>Messages</h1>
          }}/>
          <Route path='signup' component={Signup} />
          <Route path='/' component={LandingPage} exact/>
          <Redirect to="/home"/>
        </Switch>
      </div>
    );
  }
}

export default App;
