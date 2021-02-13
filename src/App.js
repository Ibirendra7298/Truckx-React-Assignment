import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from './Home';
import AddUser from './Shortlist';
import EditUser from './Rejected';
import User from './User';
export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/addUser" exact component={AddUser} />
        <Route path="/editUser" exact component={EditUser} />
        {/* <Route path="/user/:id"  component={User} /> */}
      </Router>
    );
  }
}
