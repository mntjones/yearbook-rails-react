import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Member from '../components/Member';
import MembersContainer from './MembersContainer'
import Home from './Home';
import Comments from './Comments';
import Navbar from './Navbar';


class App extends Component {


	render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/members' component={MembersContainer}/>
              <Route exact path='/members/:id' component={Member} />
              <Route path='/comments' component={Comments}/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
