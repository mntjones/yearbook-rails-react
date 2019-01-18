import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { getMembers } from '../actions/MembersActions'
import MembersContainer from './MembersContainer'
// import Home from './Home';
// import Comments from './Comments';
// import Navbar from './Navbar';


class App extends Component {

  render() {
    return (
      <div className='App'>
        <MembersContainer />
      </div>
    )
  }
}

export default App;
